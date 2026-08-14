# AGENTS.md

This file gives Codex context about the project.

## Project

A beginner-friendly Todo app built with React and Vite, used as a starter
project for a Codex course. Students extend the app by adding missing
features — guided by Codex.

## Stack

| Layer       | Choice                        |
|-------------|-------------------------------|
| UI          | React 19                      |
| Bundler     | Vite 7                        |
| Styling     | CSS Modules (plain CSS only)  |
| Tests       | Vitest + Testing Library      |
| Persistence | localStorage                  |

No backend. No routing. No auth. No external UI libraries.

## Commands

| Command           | Purpose                          |
|-------------------|----------------------------------|
| `npm run dev`     | Start dev server (localhost:5173)|
| `npm run build`   | Production build                 |
| `npm test`        | Run tests in watch mode          |
| `npm run test:ui` | Open the Vitest browser UI       |

## Conventions

- All state lives in `App.jsx`; components receive data and callbacks as props
- One component per file; its CSS module lives in the same directory
- Task shape: `{ id: string, text: string, completed: boolean }`
- See `/docs/ui.md` for styling rules
- See `/docs/data-fetching.md` for state and persistence rules

## Critical Rules

- Always extract magic numbers and configuration values into a dedicated
  `src/utils/` file. Never hardcode them inline inside a component.
