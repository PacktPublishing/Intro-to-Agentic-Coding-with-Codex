# UI Conventions

## Styling approach

All component styles use **CSS Modules** (`.module.css` files). Class names are imported as a `styles` object and applied via `className={styles.myClass}`. There are no global utility classes and no external UI frameworks.

A minimal global reset lives in `src/index.css` and is imported once in `src/main.jsx`. It sets `box-sizing: border-box`, resets `body` margin, and defines the base font stack. Do not add component-specific rules here.

## Colour palette

| Token | Value | Usage |
|---|---|---|
| Background | `#f4f5f7` | Page background (`body`) |
| Surface | `#ffffff` | Cards, article containers |
| Border | `#e5e7eb` | Card borders, dividers |
| Text primary | `#1a1a2e` | Headings |
| Text body | `#374151` | Article body copy |
| Text muted | `#4b5563` — `#9ca3af` | Summaries, meta lines |
| Accent | `#2563eb` | Buttons, site name |
| Accent hover | `#1d4ed8` | Button hover state |

## Typography

- **Font stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Line height**: `1.6` for body text; `1.75` inside article content paragraphs
- **Heading weights**: `800` for page/article headings; `700` for card titles

## Layout

- Page content is centred with a `max-width` on the container: `1000px` for the list view, `720px` for the detail view.
- Cards are laid out in a responsive CSS Grid: `repeat(auto-fill, minmax(300px, 1fr))` — no media queries required.
- Cards use `flex-direction: column` internally so the "Read article" button always sits at the bottom.

## Interactive states

- Cards: `transform: translateY(-3px)` + increased box-shadow on `:hover`.
- Buttons: background colour darkens on `:hover` via a CSS `transition`.
- All transitions use `ease` timing at `0.15s`–`0.18s`.

## Naming

CSS Module class names use camelCase (e.g., `.backButton`, `.siteHeader`) so they map cleanly to JS property access.
