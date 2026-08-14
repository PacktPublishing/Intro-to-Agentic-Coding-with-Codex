const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px solid #eee' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{
        flex: 1,
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#999' : 'inherit',
      }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ padding: '4px 8px' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
