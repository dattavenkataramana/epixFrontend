


import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskAssign from './components/TaskAssign';
import TaskStatus from './components/TaskStatus';
import TaskSummary from './components/TaskSummary/TaskSummary';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, status: 'todo' }]);
  };

  const assignTask = (taskId, userId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, assignedTo: userId } : task
    );
    setTasks(updatedTasks);
  };

  const updateStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 style={{ color: "navy" }}>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      <TaskAssign users={users} assignTask={assignTask} />
      <TaskStatus tasks={tasks} updateStatus={updateStatus} />
      <TaskSummary tasks={tasks} />
    </div>
  );
};

export default App;
