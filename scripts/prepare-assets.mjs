// One-time asset preparation. Run with: npm run assets
//  1. Converts the portrait ../photo/profession.png    -> src/assets/portrait.jpg (full frame, no crop)
//  2. Renders the 1200x630 social preview image        -> public/og.png
//  3. Renders the apple-touch-icon from the favicon     -> public/apple-touch-icon.png
//  4. Copies the PDF resume                             -> public/<name>-Resume.pdf
import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const path = (p) => fileURLToPath(new URL(p, root));

const SOURCE_PHOTO = path('../photo/profession.png');
const SOURCE_RESUME = path('../resume/Resume.pdf');
const PORTRAIT = path('src/assets/portrait.jpg');
const OG_IMAGE = path('public/og.png');
const RESUME_OUT = path('public/Aregnys-Paredes-Gomez-Resume.pdf');

await mkdir(path('src/assets'), { recursive: true });

// Same pixels and framing as the source; only re-encoded so the repo stays small.
// Astro generates the responsive AVIF/WebP sizes from this at build time.
await sharp(SOURCE_PHOTO).jpeg({ quality: 92, mozjpeg: true }).toFile(PORTRAIT);
console.log('portrait ->', PORTRAIT);

// --- Open Graph image -------------------------------------------------------
// Text on the left, the full uncropped portrait filling the right edge at full height.
const W = 1200;
const H = 630;

const portrait = await sharp(PORTRAIT).resize({ height: H, fit: 'inside' }).toBuffer({ resolveWithObject: true });
const photoW = portrait.info.width;
const photoX = W - photoW;

const dots = Array.from({ length: 24 * 13 }, (_, i) => {
  const x = 25 + (i % 24) * 50;
  const y = 25 + Math.floor(i / 24) * 50;
  return x < photoX ? `<circle cx="${x}" cy="${y}" r="1.5" fill="#5b8fd6" fill-opacity="0.18"/>` : '';
}).join('');

const background = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1020"/>
      <stop offset="1" stop-color="#0f1b33"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#5b9bea"/>
      <stop offset="1" stop-color="#2dd4bf"/>
    </linearGradient>
    <linearGradient id="accentV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5b9bea"/>
      <stop offset="1" stop-color="#2dd4bf"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${dots}
  <rect x="72" y="150" width="72" height="6" rx="3" fill="url(#accent)"/>
  <text x="72" y="245" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="62" font-weight="700" fill="#e8eef9">Aregnys C.</text>
  <text x="72" y="320" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="62" font-weight="700" fill="#e8eef9">Paredes Gomez</text>
  <text x="72" y="390" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" font-weight="600" fill="#7fb0f0">Senior AI / Machine Learning Engineer</text>
  <text x="72" y="440" font-family="Consolas, JetBrains Mono, monospace" font-size="21" fill="#9fb0c8">LLMs &amp; Generative AI · Secure Distributed Systems</text>
  <rect x="${photoX - 6}" y="0" width="6" height="${H}" fill="url(#accentV)"/>
</svg>`;

await sharp(Buffer.from(background))
  .composite([{ input: portrait.data, left: photoX, top: 0 }])
  .png({ compressionLevel: 9 })
  .toFile(OG_IMAGE);
console.log('og image ->', OG_IMAGE);

await sharp(path('public/favicon.svg'), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile(path('public/apple-touch-icon.png'));
console.log('touch icon -> public/apple-touch-icon.png');

await copyFile(SOURCE_RESUME, RESUME_OUT);
console.log('resume   ->', RESUME_OUT);
