import styles from './FilterBar.module.css'

const FILTERS = ['all', 'active', 'completed']

export default function FilterBar({ filter, onFilterChange, taskCount }) {
  return (
    <div className={styles.bar}>
      {FILTERS.map(f => (
        <button
          key={f}
          className={`${styles.filterButton} ${filter === f ? styles.active : ''}`}
          onClick={() => onFilterChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
      <span className={styles.count}>
        {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
      </span>
    </div>
  )
}
