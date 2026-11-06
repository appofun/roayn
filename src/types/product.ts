import { z } from "zod";

export const productCategories = [
  "Android Apps",
  "Galaxy Themes",
  "Watch Faces",
  "Wallpapers",
  "Digital Assets",
  "Software Utilities",
] as const;

export const productStatuses = ["draft", "published", "archived"] as const;

const storeLinkSchema = z.object({
  label: z.string().min(1),
  url: z.url(),
});

export const productSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  subtitle: z.string(),
  shortDescription: z.string().min(1),
  fullDescription: z.string().min(1),
  category: z.enum(productCategories),
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
  storeLinks: z.array(storeLinkSchema),
  websiteLink: z.union([z.url(), z.literal("")]),
  supportEmail: z.union([z.email(), z.literal("")]),
  privacyPolicyUrl: z.union([z.url(), z.string().startsWith("/")]),
  status: z.enum(productStatuses),
  featured: z.boolean(),
  tags: z.array(z.string()),
  seoTitle: z.string(),
  seoDescription: z.string(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Product = z.infer<typeof productSchema>;
