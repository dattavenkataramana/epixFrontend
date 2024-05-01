 
import React from 'react';
import './index.css';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
