import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const ROOT = process.cwd();
const ASSETS_DIR = path.join(ROOT, "src", "components", "Assets");
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 78;
const MIN_BYTES_TO_TOUCH = 80 * 1024;

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(fullPath, acc);
      continue;
    }
    if (IMAGE_EXT.has(path.extname(ent.name).toLowerCase())) {
      acc.push(fullPath);
    }
  }
  return acc;
}

async function optimizeFile(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size < MIN_BYTES_TO_TOUCH) {
    return { filePath, skipped: true, reason: "small" };
  }

  const ext = path.extname(filePath).toLowerCase();
  const image = sharp(filePath, { failOn: "none" });
  const meta = await image.metadata();
  const width = meta.width || 0;
  const needsResize = width > MAX_WIDTH;

  let pipeline = image.rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  const tmpPath = `${filePath}.tmp`;

  if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9, quality: 80 }).toFile(tmpPath);
  } else if (ext === ".webp") {
    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
  }

  const newSize = fs.statSync(tmpPath).size;
  if (newSize >= stat.size) {
    fs.unlinkSync(tmpPath);
    return { filePath, skipped: true, reason: "no-gain", before: stat.size };
  }

  fs.renameSync(tmpPath, filePath);
  return {
    filePath,
    skipped: false,
    before: stat.size,
    after: newSize,
    resized: needsResize,
  };
}

const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const run = async () => {
  if (!fs.existsSync(ASSETS_DIR)) {
    throw new Error(`Assets directory not found: ${ASSETS_DIR}`);
  }

  const files = walk(ASSETS_DIR);
  let saved = 0;
  let optimized = 0;
  let skipped = 0;

  for (const filePath of files) {
    try {
      const result = await optimizeFile(filePath);
      const rel = path.relative(ROOT, filePath);
      if (result.skipped) {
        skipped += 1;
        continue;
      }
      optimized += 1;
      saved += result.before - result.after;
      console.log(
        `${rel}: ${formatKb(result.before)} -> ${formatKb(result.after)}${result.resized ? " (resized)" : ""}`,
      );
    } catch (error) {
      console.error(`Failed: ${filePath}`, error);
      process.exitCode = 1;
    }
  }

  console.log(
    `\nDone. optimized=${optimized}, skipped=${skipped}, saved=${formatKb(saved)}`,
  );
};

run().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exit(1);
});
