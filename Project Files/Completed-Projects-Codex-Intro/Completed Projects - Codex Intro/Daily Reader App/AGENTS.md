# AGENTS.md

## Project

A React + Vite article showcase site built as a coding-course starter project. Students work through exercises by completing missing features in this codebase.

## Stack

- **React 19** — functional components, hooks
- **Vite 7** — dev server and bundler
- **CSS Modules** — scoped component styles, no external UI libraries

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run ESLint
```

## Conventions

- One component per file; component file and its CSS Module share the same base name.
- Props flow down only — no context, no global state store.
- State lives in `App.jsx`; components receive data and callbacks via props.
- CSS class names use camelCase in JS (`styles.backButton`).
- Article data lives in `src/data/articles.js` as a plain JS array; no API calls.

## Critical Rules

- **Do not add routing.** Navigation between list and detail views is managed by a single `selectedArticle` state in `App.jsx`. Introducing React Router or any router breaks the intended teaching structure.
- **Do not add external UI libraries.** No Tailwind, no MUI, no Chakra. Only CSS Modules and plain CSS.
- **Do not add a backend or localStorage.** All data is static and lives in `src/data/articles.js`.
- **Missing features may be intentional.** This is a course starter — gaps in the code are often student exercises. Do not silently add features without being explicitly asked.
- **Keep dependencies minimal.** Only `react`, `react-dom`, and Vite-related devDependencies are permitted.
