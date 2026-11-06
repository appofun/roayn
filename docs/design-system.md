# ROAYN design system

## Direction

ROAYN uses a restrained dark editorial system: deep navy surfaces, precise spacing, soft blue/violet illumination, and geometric compositions that communicate technology without fake dashboards or stock imagery.

## Core tokens

| Role | Value |
| --- | --- |
| Primary background | `#070B14` |
| Secondary background | `#0D1423` |
| Surface | `#141E30` |
| Electric blue | `#3B82F6` |
| Royal violet | `#8B5CF6` |
| Cyan accent | `#22D3EE` |
| Primary text | `#F8FAFC` |
| Secondary text | `#94A3B8` |

Body copy uses Inter. Headlines use Space Grotesk. Both font families are bundled through `@fontsource`, so the production site does not depend on a third-party font request.

## Logo system

- `public/logos/roayn-mark.svg`: geometric R symbol.
- `public/logos/roayn-wordmark-light.svg`: horizontal mark for dark surfaces.
- `public/logos/roayn-wordmark-dark.svg`: horizontal mark for light surfaces.
- `public/icons/favicon.svg`: small-size browser mark.
- `public/icons/apple-touch-icon.png`: 180 × 180 touch icon.
- `public/images/og-roayn.png`: 1200 × 630 social preview.

## Interaction and accessibility

- Interactive controls maintain visible keyboard focus.
- Text and controls use high-contrast foregrounds.
- Navigation has an explicit mobile toggle and current-page indication.
- Motion is subtle and disabled through `prefers-reduced-motion`.
- Touch controls target a minimum height of 42–48 pixels.
- Responsive layouts are defined down to 320-pixel viewports.
