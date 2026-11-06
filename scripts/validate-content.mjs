import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const category = z.enum([
  "Android Apps",
  "Galaxy Themes",
  "Watch Faces",
  "Wallpapers",
  "Digital Assets",
  "Software Utilities",
]);

const productSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  subtitle: z.string(),
  shortDescription: z.string().min(1),
  fullDescription: z.string().min(1),
  category,
  subcategory: z.string(),
  icon: z.string(),
  coverImage: z.string(),
  screenshots: z.array(z.string()),
  features: z.array(z.string()),
  platform: z.array(z.string()),
  supportedDevices: z.array(z.string()),
  version: z.string(),
  lastUpdated: z.iso.date(),
  developer: z.string(),
  publisher: z.string(),
  storeLinks: z.array(z.object({ label: z.string().min(1), url: z.url() })),
  websiteLink: z.union([z.url(), z.literal("")]),
  supportEmail: z.union([z.email(), z.literal("")]),
  privacyPolicyUrl: z.union([z.url(), z.string().startsWith("/")]),
  status: z.enum(["draft", "published", "archived"]),
  featured: z.boolean(),
  tags: z.array(z.string()),
  seoTitle: z.string(),
  seoDescription: z.string(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

const directory = path.resolve("src/content/products");
const files = (await readdir(directory)).filter((file) => file.endsWith(".json"));
const ids = new Set();
const slugs = new Set();

for (const file of files) {
  const value = JSON.parse(await readFile(path.join(directory, file), "utf8"));
  const product = productSchema.parse(value);
  if (ids.has(product.id)) throw new Error(`Duplicate product id: ${product.id}`);
  if (slugs.has(product.slug)) throw new Error(`Duplicate product slug: ${product.slug}`);
  ids.add(product.id);
  slugs.add(product.slug);

  if (product.status === "published") {
    if (!product.seoTitle || !product.seoDescription) {
      throw new Error(`${file}: published products require SEO title and description`);
    }
    if (!product.icon || !product.coverImage) {
      throw new Error(`${file}: published products require verified icon and cover assets`);
    }
  }
}

console.log(`Validated ${files.length} product content file(s).`);
