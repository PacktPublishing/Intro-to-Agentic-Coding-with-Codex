import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
