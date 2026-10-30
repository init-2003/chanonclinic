import { mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = new URL("../photo/", import.meta.url);
const output = new URL("../public/images/clinic-real/", import.meta.url);
const photos = [
  ["IMG_7085.jpeg", "reception-hall-wide.webp", 2400],
  ["IMG_7081.jpeg", "reception-staff-welcoming.webp", 1600],
  ["IMG_7083.jpeg", "reception-counter-branding.webp", 1600],
  ["IMG_7097.jpeg", "ultrasound-equipment.webp", 1600],
  ["IMG_7096.jpeg", "consultation-room.webp", 1600],
  ["IMG_7089.jpeg", "ultrasound-procedure-room.webp", 1600],
  ["IMG_7087.jpeg", "reception-welcome-wide.webp", 1600],
];

await mkdir(output, { recursive: true });
for (const [original, filename, width] of photos) {
  const destination = new URL(filename, output);
  await sharp(fileURLToPath(new URL(original, source)))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(fileURLToPath(destination));
  console.log(`${original} -> ${filename}: ${Math.round((await stat(destination)).size / 1024)} KB`);
}

await sharp(fileURLToPath(new URL("IMG_7085.jpeg", source)))
  .rotate()
  .resize({ width: 1600, withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(fileURLToPath(new URL("reception-share.jpg", output)));

// Crop the original before downsampling so the portrait retains face detail.
await sharp(fileURLToPath(new URL("IMG_7081.jpeg", source)))
  .rotate()
  .extract({ left: 1080, top: 0, width: 2420, height: 3024 })
  .resize({ width: 1600, height: 2000, fit: "cover" })
  .webp({ quality: 92, effort: 6 })
  .toFile(fileURLToPath(new URL("reception-staff-portrait.webp", output)));
