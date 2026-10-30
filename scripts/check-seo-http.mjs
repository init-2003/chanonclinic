import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3001/");
const canonical = new URL(process.argv[3] || "https://chanonclinic.vercel.app/").href;
const googleFile = "google161abe180a8d091b.html";
const htmlResponse = await fetch(base, { headers: { "User-Agent": "Googlebot" }, signal: AbortSignal.timeout(30000) });
assert.equal(htmlResponse.status, 200, "Homepage must return HTTP 200");
assert.ok(!/noindex/i.test(htmlResponse.headers.get("x-robots-tag") || ""), "Production HTTP headers must permit indexing");
const html = await htmlResponse.text();
const attributes = tag => Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)="([^"]*)"/g), match => [match[1], match[2]]));
const links = Array.from(html.matchAll(/<link\b[^>]*>/g), match => attributes(match[0]));
const meta = Array.from(html.matchAll(/<meta\b[^>]*>/g), match => attributes(match[0]));
assert.equal(new URL(links.find(link => link.rel === "canonical")?.href).href, canonical);
assert.ok(meta.some(tag => tag.name === "robots" && /\bindex\b/.test(tag.content) && !/noindex/.test(tag.content)));
assert.equal(new URL(meta.find(tag => tag.property === "og:url")?.content).href, canonical);
assert.equal(meta.find(tag => tag.name === "twitter:card")?.content, "summary_large_image");
assert.equal(Array.from(html.matchAll(/<h1(?:\s|>)/g)).length, 1, "Use one main page heading");
const jsonLd = Array.from(html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g), match => JSON.parse(match[1]));
assert.ok(jsonLd.some(document => document["@graph"]?.some(node => node["@type"] === "MedicalClinic")));
assert.ok(!JSON.stringify(jsonLd).includes("csmileclinic"));
console.log("PASS homepage: HTTP 200, canonical, indexability, social metadata, one H1, clinic JSON-LD");

const [robotsResponse, sitemapResponse, verificationResponse, imageResponse] = await Promise.all([
  "robots.txt", "sitemap.xml", googleFile, "opengraph-image",
].map(route => fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) })));
for (const response of [robotsResponse, sitemapResponse, verificationResponse, imageResponse]) assert.equal(response.status, 200, `${response.url} must return HTTP 200`);
const robots = await robotsResponse.text();
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`));
assert.match(robots, /Allow: \//);
assert.ok(!/Disallow:\s*\/\s*$/m.test(robots));
const sitemap = await sitemapResponse.text();
assert.ok(sitemapResponse.headers.get("content-type")?.includes("xml"));
assert.equal(Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).length, 1);
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
assert.equal((await verificationResponse.text()).trim(), `google-site-verification: ${googleFile}`);
assert.ok(imageResponse.headers.get("content-type")?.includes("image/png"));
const image = Buffer.from(await imageResponse.arrayBuffer());
assert.equal(image.subarray(1, 4).toString(), "PNG");
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log("PASS robots.txt, sitemap.xml, exact Google verification file, and 1200x630 PNG share image");
