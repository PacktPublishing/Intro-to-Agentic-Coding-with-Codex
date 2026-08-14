import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Claude Code', completed: false },
    { id: 2, text: 'Build something cool', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '480px', margin: '48px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '24px' }}>Todo App</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
