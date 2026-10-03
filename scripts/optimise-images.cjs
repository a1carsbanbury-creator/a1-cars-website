// One-off: shrink the heavy fleet/OG PNGs to WebP. Run: node scripts/optimise-images.cjs
const sharp = require('sharp');
(async () => {
  for (const n of ['fleet-estate-taxi', 'fleet-executive-saloon', 'fleet-ford-transit']) {
    await sharp(`public/${n}.png`).resize({ width: 1200 }).webp({ quality: 80 }).toFile(`public/${n}.webp`);
  }
  await sharp('public/og.png').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile('public/og.jpg');
})();
