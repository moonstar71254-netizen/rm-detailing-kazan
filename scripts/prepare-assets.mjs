import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const targetDir = join(process.cwd(), 'public', 'images');
const assets = [
  {
    name: 'hero-studio.jpg',
    url: 'https://drive.usercontent.google.com/download?id=13ZFG_cJAwwWgog8tqwGVgQFKOn4F46oo&export=download',
  },
  {
    name: 'polishing.jpg',
    url: 'https://drive.usercontent.google.com/download?id=1sxNZhVdXg9VDgBqBsxVrfaJheypHRvpL&export=download',
  },
  {
    name: 'ceramic.jpg',
    url: 'https://drive.usercontent.google.com/download?id=10VIrkdg_JKpuj7PMqEMRHeQJGJqSi2cV&export=download',
  },
  {
    name: 'interior.jpg',
    url: 'https://drive.usercontent.google.com/download?id=1M9B14X3TqiAruEMUAyYuqxV1nSVpnkX4&export=download',
  },
];

mkdirSync(targetDir, { recursive: true });

await Promise.all(
  assets.map(async ({ name, url }) => {
    const filePath = join(targetDir, name);
    if (existsSync(filePath)) return;
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
      throw new Error(`Asset fetch failed (${response.status}): ${name}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    writeFileSync(filePath, buffer);
  })
);
