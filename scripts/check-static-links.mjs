import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }
  return files;
}

function targetFor(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/")) return null;
  if (path.extname(clean)) return path.join(root, clean);
  return path.join(root, clean, "index.html");
}

const pages = (await walk(root)).filter((file) => file.endsWith(".html"));
const failures = [];

for (const page of pages) {
  const html = await readFile(page, "utf8");
  const links = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const href of links) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(href)) continue;
    const target = targetFor(href);
    if (!target) continue;
    try {
      await access(target);
    } catch {
      failures.push(`${path.relative(root, page)} -> ${href}`);
    }
  }
}

if (failures.length) {
  console.error(`Broken static links:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${pages.length} generated page(s); no broken local links found.`);
