import { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New task..."
        style={{ flex: 1, padding: '8px', fontSize: '16px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px', fontSize: '16px' }}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
