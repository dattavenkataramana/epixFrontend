 

import React from 'react';
import './index.css'
const TaskStatus = ({ task, updateStatus }) => {
  const handleClick = (status) => {
    if (task && task.id) { 
      updateStatus(task.id, status);
      console.log(status)
    }
  };

  return (
    <div>
      <button onClick={() => handleClick('start')}>Start</button>
      <button onClick={() => handleClick('end')}>End</button>
      <button onClick={() => handleClick('complete')}>Complete</button>
    </div>
  );
};

export default TaskStatus;
