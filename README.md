# ROAYN corporate website

Production-oriented corporate website and scalable product portfolio for [roayn.com](https://roayn.com). The site uses Next.js App Router, TypeScript, Tailwind CSS, Zod content validation, and a static export compatible with GitHub Pages.

## Current public-content policy

- Only products whose content record has `status: "published"` appear publicly.
- The included product is a documentation-only draft and is never rendered in the catalog.
- No ratings, downloads, customers, partnerships, awards, or released products are invented.
- Company formation is described as pending final state approval.
- Contact addresses are marked as requiring owner confirmation.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run validate:content
npm run build
npm run check:links
```

`npm run check` runs the full sequence. The static site is written to `out/`.

## Content and deployment

- [Product management](docs/product-management.md)
- [GitHub Pages and domain setup](docs/deployment.md)
- [Design system](docs/design-system.md)

No license has been added because the owner has not selected one.
