import { useEffect, useRef } from 'react'
import { playCompletionSound } from '../utils/audio'
import { TASK_TEXT_MAX_LENGTH } from '../utils/taskConfig'
import styles from './TaskItem.module.css'

export default function TaskItem({
  task,
  isEditing,
  editingText,
  onEditStart,
  onEditTextChange,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
}) {
  const editInputRef = useRef(null)
  const isCancellingEditRef = useRef(false)

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus()
      editInputRef.current?.select()
    }
  }, [isEditing])

  const handleToggle = () => {
    if (!task.completed) {
      playCompletionSound()
    }

    onToggle(task.id)
  }

  const handleEditKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEditSave()
    }

    if (event.key === 'Escape') {
      isCancellingEditRef.current = true
      onEditCancel()
    }
  }

  const handleEditBlur = () => {
    if (isCancellingEditRef.current) {
      isCancellingEditRef.current = false
      return
    }

    onEditSave()
  }

  return (
    <li className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={handleToggle}
        aria-label={`Mark "${task.text}" as ${task.completed ? 'active' : 'complete'}`}
      />
      {isEditing ? (
        <input
          ref={editInputRef}
          className={styles.editInput}
          type="text"
          value={editingText}
          onChange={event => onEditTextChange(event.target.value)}
          onKeyDown={handleEditKeyDown}
          onBlur={handleEditBlur}
          maxLength={TASK_TEXT_MAX_LENGTH}
          aria-label={`Edit "${task.text}"`}
        />
      ) : (
        <span className={styles.text} onDoubleClick={() => onEditStart(task)}>
          {task.text}
        </span>
      )}
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.text}"`}
      >
        ✕
      </button>
    </li>
  )
}
