import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('todo-tasks')
    return stored ? JSON.parse(stored) : []
  })
  const [filter, setFilter] = useState('all')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    setTasks(prev => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ])
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const saveTaskEdit = () => {
    if (!editingTaskId) return

    const trimmedText = editingText.trim()

    if (trimmedText) {
      setTasks(prev =>
        prev.map(task =>
          task.id === editingTaskId ? { ...task, text: trimmedText } : task
        )
      )
    }

    setEditingTaskId(null)
    setEditingText('')
  }

  const startTaskEdit = (task) => {
    if (editingTaskId && editingTaskId !== task.id) {
      saveTaskEdit()
    }

    setEditingTaskId(task.id)
    setEditingText(task.text)
  }

  const cancelTaskEdit = () => {
    setEditingTaskId(null)
    setEditingText('')
  }

  const deleteTask = (id) => {
    if (editingTaskId === id) {
      cancelTaskEdit()
    }

    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo</h1>
      <TaskInput onAdd={addTask} />
      <FilterBar filter={filter} onFilterChange={setFilter} taskCount={tasks.length} />
      <TaskList
        tasks={filteredTasks}
        editingTaskId={editingTaskId}
        editingText={editingText}
        onEditStart={startTaskEdit}
        onEditTextChange={setEditingText}
        onEditSave={saveTaskEdit}
        onEditCancel={cancelTaskEdit}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App
