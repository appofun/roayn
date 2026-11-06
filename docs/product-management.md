# Product management

Products are managed as individual JSON files under `src/content/products/`. Frontend components do not need to be edited when a product is added.

## Status workflow

- `draft`: private working record; never shown publicly.
- `published`: included in the catalog, static product route, sitemap, search, and related products.
- `archived`: retained in source history but hidden from the public site.

The repository includes `example-draft.json` as a schema example. It is not a released product and must not be changed to `published` until all information and authentic assets are supplied and verified.

## Add a product

1. Copy the draft JSON to a new file named after the intended slug.
2. Give the product a unique `id` and lowercase hyphenated `slug`.
3. Replace every example value with verified product information.
4. Add authentic assets under `public/products/<slug>/`.
5. Use root-relative asset paths, for example `/products/my-app/icon.png`.
6. Add only official marketplace links.
7. Keep the record as `draft` while reviewing it.
8. Run `npm run validate:content`, `npm run typecheck`, and `npm run build`.
9. Set the record to `published`, rebuild, and review the generated page.

## Asset conventions

- App icon: square PNG or WebP with no promotional text.
- Cover: landscape image suitable for the product hero and social sharing.
- Screenshots: authentic product UI only, ordered as they should appear.
- Galaxy Themes: lock, home, icons, and AOD previews only when actually available.
- Watch faces: dial, watch-context, and AOD previews only when actually available.
- Use descriptive lowercase file names separated by hyphens.

Never fabricate screenshots, ratings, prices, reviews, download counts, compatibility, or store availability.

## Archive or remove

Prefer changing `status` to `archived` when a historical record should remain in the repository. Delete a content file only when the record was created in error and no historical reference is required. Rebuild after either action so the sitemap and generated routes stay accurate.

## Schema fields

The canonical TypeScript and Zod schema is `src/types/product.ts`. The build validation script checks every JSON file for required fields, valid dates and URLs, unique IDs, unique slugs, and the additional information required for published content.

## Future CMS

The public components consume typed product objects through `src/lib/products.ts`. A future CMS adapter can replace the file loader while preserving the same validated `Product` shape.
