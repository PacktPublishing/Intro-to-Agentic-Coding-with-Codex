import styles from './TaskNote.module.css'

export default function TaskNote({ task }) {
  if (!task.note) return null

  return (
    <p className={styles.item} aria-label={`Note for "${task.text}"`}>
      <span className={styles.text}>{task.note}</span>
    </p>
  )
}
