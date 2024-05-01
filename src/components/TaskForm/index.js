
import React, { useState } from 'react';
import './index.css'
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form  className='task-form-container ' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='task-form-input'
      />
      <textarea
      className='task-form-textarea'
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='task-form-button' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
