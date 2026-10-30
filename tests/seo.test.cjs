const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Execute the actual TS metadata factories without starting a browser/server.
const cache = new Map();
function loadTs(relativePath) {
  const filename = path.resolve(__dirname, "..", relativePath);
  if (cache.has(filename)) return cache.get(filename).exports;
  const source = fs.readFileSync(filename, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  const module = new Module(filename);
  module.filename = filename;
  module.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = module.require.bind(module);
  module.require = name => name.startsWith("@/")
    ? loadTs(`src/${name.slice(2)}.ts`)
    : name.startsWith(".")
      ? loadTs(path.relative(path.resolve(__dirname, ".."), path.resolve(path.dirname(filename), `${name}.ts`)))
      : originalRequire(name);
  cache.set(filename, module);
  module._compile(compiled, filename);
  return module.exports;
}

const { SITE_URL, SITE_LAST_MODIFIED, isIndexableDeployment } = loadTs("src/config/site.ts");
const { createSeoMetadata, createClinicStructuredData, serializeJsonLd } = loadTs("src/lib/seo.ts");
const { branchesData, doctorSectionData } = loadTs("src/data/clinicData.ts");
const { ultrasoundServices } = loadTs("src/data/ultrasoundData.ts");
const production = { NODE_ENV: "production", VERCEL_ENV: "production" };

test("canonical, sharing metadata and sitemap all use the clinic production URL", () => {
  const metadata = createSeoMetadata(production);
  assert.equal(SITE_URL, "https://chanonclinic.vercel.app/");
  assert.equal(metadata.metadataBase.href, SITE_URL);
  assert.equal(metadata.alternates.canonical, SITE_URL);
  assert.equal(metadata.openGraph.url, SITE_URL);
  assert.equal(metadata.openGraph.images[0].url, `${SITE_URL}opengraph-image`);
  assert.equal(metadata.twitter.card, "summary_large_image");
  assert.equal(metadata.robots.index, true);
  assert.ok(!JSON.stringify(metadata).includes("csmileclinic"));
  const sitemap = loadTs("src/app/sitemap.ts").default();
  assert.deepEqual(sitemap, [{ url: SITE_URL, lastModified: SITE_LAST_MODIFIED }]);
  assert.ok(!sitemap.some(entry => entry.url.includes("#")));
});

test("development, previews and explicit opt-out cannot advertise indexable metadata", () => {
  for (const environment of [
    { NODE_ENV: "development" },
    { NODE_ENV: "production", VERCEL_ENV: "preview" },
    { NODE_ENV: "production", VERCEL_ENV: "development" },
    { ...production, SITE_NOINDEX: "true" },
  ]) {
    assert.equal(isIndexableDeployment(environment), false);
    const metadata = createSeoMetadata(environment);
    assert.equal(metadata.robots.index, false);
    assert.equal(metadata.robots.follow, false);
    assert.equal(metadata.robots.googleBot.index, false);
    assert.equal(metadata.alternates.canonical, SITE_URL);
  }
  assert.equal(isIndexableDeployment({ NODE_ENV: "production" }), true);
});

test("schema connects the website, page, clinic, doctor and displayed tests", () => {
  const graph = createClinicStructuredData()["@graph"];
  const clinic = graph.find(node => node["@type"] === "MedicalClinic");
  const website = graph.find(node => node["@type"] === "WebSite");
  const webpage = graph.find(node => node["@type"] === "WebPage");
  const doctor = graph.find(node => node["@type"] === "Person");
  assert.equal(website.publisher["@id"], clinic["@id"]);
  assert.equal(webpage.mainEntity["@id"], clinic["@id"]);
  assert.equal(webpage.isPartOf["@id"], website["@id"]);
  assert.equal(clinic.employee["@id"], doctor["@id"]);
  assert.equal(doctor.worksFor["@id"], clinic["@id"]);
  assert.ok(doctorSectionData.teamSummaryTh.includes(doctor.name));
  assert.equal(clinic.telephone, branchesData[0].phoneInternational);
  assert.equal(clinic.address.postalCode, branchesData[0].postalCode);
  assert.equal(clinic.availableService.length, ultrasoundServices.length);
  assert.deepEqual(clinic.availableService.map(service => service.name), ultrasoundServices.map(service => service.titleTh));
  assert.ok(!JSON.stringify(graph).includes("csmileclinic"));
  assert.equal(clinic.aggregateRating, undefined);
  assert.equal(clinic.review, undefined);
  assert.equal(clinic.geo, undefined);
});

test("hours match the displayed schedule, including the Tuesday closure", () => {
  const clinic = createClinicStructuredData()["@graph"].find(node => node["@type"] === "MedicalClinic");
  const hours = clinic.openingHoursSpecification;
  assert.deepEqual(hours[0].dayOfWeek.map(day => day.split("/").pop()), ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"]);
  assert.equal(hours[0].opens, "17:30");
  assert.equal(hours[0].closes, "20:00");
  assert.deepEqual(hours[1].dayOfWeek, ["https://schema.org/Sunday"]);
  assert.equal(hours[1].opens, "10:00");
  assert.equal(hours[1].closes, "12:00");
});

test("JSON-LD cannot close its script element and survives serialization", () => {
  const payload = { name: "</script><img src=x onerror=alert(1)>" };
  const serialized = serializeJsonLd(payload);
  assert.ok(!serialized.includes("<"));
  assert.deepEqual(JSON.parse(serialized), payload);
  assert.deepEqual(JSON.parse(serializeJsonLd(createClinicStructuredData())), createClinicStructuredData());
});

test("verification file is exact and an optional meta token is never fabricated", () => {
  const file = fs.readFileSync(path.resolve(__dirname, "../public/google161abe180a8d091b.html"), "utf8");
  assert.equal(file.trim(), "google-site-verification: google161abe180a8d091b.html");
  assert.equal(createSeoMetadata(production).verification, undefined);
  assert.equal(createSeoMetadata({ ...production, GOOGLE_SITE_VERIFICATION: "  example-token  " }).verification.google, "example-token");
});

test("robots allows rendering assets and preview headers supply noindex", () => {
  const original = { NODE_ENV: process.env.NODE_ENV, VERCEL_ENV: process.env.VERCEL_ENV, SITE_NOINDEX: process.env.SITE_NOINDEX };
  const robots = loadTs("src/app/robots.ts").default;
  const config = loadTs("next.config.ts").default;
  try {
    process.env.NODE_ENV = "production";
    process.env.VERCEL_ENV = "production";
    delete process.env.SITE_NOINDEX;
    assert.equal(robots().sitemap, `${SITE_URL}sitemap.xml`);
    assert.deepEqual(config.headers(), []);
    process.env.VERCEL_ENV = "preview";
    assert.equal(robots().rules.allow, "/");
    assert.equal(robots().sitemap, undefined);
    assert.deepEqual(config.headers()[0].headers, [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]);
  } finally {
    for (const [key, value] of Object.entries(original)) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
});
