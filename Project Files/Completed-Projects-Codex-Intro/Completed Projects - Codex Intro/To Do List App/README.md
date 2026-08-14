# Todo App — Codex Course Starter

A deliberately incomplete Todo app. You will use **Codex** to add the
missing features listed below.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Running tests

```bash
npm test           # watch mode
npm run test:ui    # browser UI
```

One test passes. One test fails — that is intentional. Fixing it is your
first exercise.

## What already works

| Feature | File |
|---|---|
| Add a task | `TaskInput.jsx` |
| Mark complete (checkbox) | `TaskItem.jsx` |
| Delete a task | `TaskItem.jsx` |
| Character counter (max 100, turns red) | `TaskInput.jsx` |
| Filter bar — All / Active / Completed | `FilterBar.jsx` |
| localStorage persistence | `App.jsx` |

## What is missing (your exercises)

- **Empty-input validation** — clicking Add Task with a blank field still
  creates an empty task. Add a guard in `TaskInput.jsx` to prevent this.
  The failing test in `src/__tests__/tasks.test.jsx` will go green once you do.

- **Task editing** — double-clicking a task text should let you edit it
  in place and save on Enter / blur.

- **Due dates** — tasks have no deadline field. Add a date picker to
  `TaskInput` and display the date in `TaskItem`.

- **Drag to reorder** — tasks are fixed in insertion order.

## Project structure

```
src/
  components/
    TaskInput.jsx + TaskInput.module.css
    TaskList.jsx  + TaskList.module.css
    TaskItem.jsx  + TaskItem.module.css
    FilterBar.jsx + FilterBar.module.css
  App.jsx + App.module.css
  main.jsx
  index.css
docs/
  ui.md            — styling conventions
  data-fetching.md — state and persistence conventions
vitest.config.js
```

## Stack

- React 19 + Vite 7
- CSS Modules only (no Tailwind, no UI libraries)
- Vitest + Testing Library
- localStorage (no backend)
