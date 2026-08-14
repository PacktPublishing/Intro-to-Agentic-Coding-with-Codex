# UI Conventions

## Layout

- All components live in `src/components/`
- Each component has a matching `.module.css` file in the same directory
- Max content width: `600px`, centered via `margin: auto` in `App.module.css`
- Page background: `#f3f4f6` (set in `src/index.css`)

## Colour Palette

| Token        | Value     | Used for                          |
|--------------|-----------|-----------------------------------|
| Primary      | `#6366f1` | Buttons, focus rings, checkboxes  |
| Primary dark | `#4f46e5` | Button hover                      |
| Danger       | `#ef4444` | Delete hover, character limit     |
| Danger light | `#fee2e2` | Delete button hover background    |
| Border       | `#d1d5db` | Default input / pill borders      |
| Border inner | `#e5e7eb` | Task item border                  |
| Text muted   | `#9ca3af` | Empty state, count, delete icon   |
| Text base    | `#1a1a1a` | Body copy                         |
| Surface      | `#fff`    | Cards, inputs                     |

## Border Radii

| Element              | Radius |
|----------------------|--------|
| Inputs, buttons      | `6px`  |
| Task list items      | `8px`  |
| Filter pills         | `20px` |
| Delete button        | `4px`  |

## Interaction

- Every interactive element has a `transition` on whichever property changes
- Default transition duration: `0.15s`
- Checkboxes use `accent-color: #6366f1`

## Component Hierarchy

```
App
├── TaskInput      — input field, Add Task button, character counter
├── FilterBar      — All / Active / Completed pills + task count
└── TaskList
    └── TaskItem   — checkbox, task text, delete button
```

## Adding a New Component

1. Create `src/components/ComponentName.jsx`
2. Create `src/components/ComponentName.module.css` alongside it
3. Import CSS with `import styles from './ComponentName.module.css'`
4. Apply class names with `className={styles.className}`
5. Wire it into the appropriate parent component; lift any new state to `App.jsx`
