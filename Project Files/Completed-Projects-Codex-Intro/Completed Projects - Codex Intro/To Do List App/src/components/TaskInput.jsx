import { useState } from 'react'
import { TASK_TEXT_MAX_LENGTH } from '../utils/taskConfig'
import styles from './TaskInput.module.css'

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    // TODO: add empty-input validation here — currently submits blank tasks
    onAdd(text.trim())
    setText('')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="What needs to be done?"
          maxLength={TASK_TEXT_MAX_LENGTH}
          aria-label="New task"
        />
        <button className={styles.button} onClick={handleAdd}>
          Add Task
        </button>
      </div>
      <p className={`${styles.counter} ${text.length >= TASK_TEXT_MAX_LENGTH ? styles.atLimit : ''}`}>
        {text.length} / {TASK_TEXT_MAX_LENGTH}
      </p>
    </div>
  )
}
