# Data & State Conventions

## State Shape

All app state lives in `App.jsx`. There is no global state manager.

```js
// Task object — the single source of truth
{
  id: string,        // crypto.randomUUID(), set at creation time
  text: string,      // 1–100 characters (MAX_LENGTH enforced in TaskInput)
  completed: boolean // toggled by the checkbox
}
```

The active filter (`'all' | 'active' | 'completed'`) is also stored in `App`
but is never persisted — it resets to `'all'` on page load.

## Persistence

Tasks are persisted to `localStorage` under the key `"todo-tasks"`.

**Read** — lazy initialiser so it runs exactly once on mount:

```js
const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem('todo-tasks')
  return stored ? JSON.parse(stored) : []
})
```

**Write** — effect that syncs whenever `tasks` changes:

```js
useEffect(() => {
  localStorage.setItem('todo-tasks', JSON.stringify(tasks))
}, [tasks])
```

## Task Operations

All mutations live in `App.jsx` and are passed to children as callbacks:

| Prop       | Signature                | Behaviour                         |
|------------|--------------------------|-----------------------------------|
| `onAdd`    | `(text: string) => void` | Prepends a new task to the array  |
| `onToggle` | `(id: string) => void`   | Flips `completed` on one task     |
| `onDelete` | `(id: string) => void`   | Removes the task from the array   |

Mutations always use the functional updater form (`setTasks(prev => ...)`) to
avoid stale-closure bugs.

## Filtering

Filtering is derived — it does **not** mutate `tasks`:

```js
const filteredTasks = tasks.filter(task => {
  if (filter === 'active') return !task.completed
  if (filter === 'completed') return task.completed
  return true
})
```

Only `filteredTasks` is passed to `<TaskList>`. The full `tasks` array is
used for the count in `<FilterBar>`.

## What Is Not Here (yet)

- No API calls — everything is local; no `fetch`, no async state
- No loading or error states
- No optimistic updates
- No task editing, due dates, or ordering — those are student exercises in the Codex course
