import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

export default function TaskList({
  tasks,
  editingTaskId,
  editingText,
  onEditStart,
  onEditTextChange,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
}) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>No tasks here.</p>
  }

  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={editingTaskId === task.id}
          editingText={editingText}
          onEditStart={onEditStart}
          onEditTextChange={onEditTextChange}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
