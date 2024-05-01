
import React from 'react';
import './index.css'

const TaskSummary = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'complete').length;

  return (
    <div>
      <p style={{margin:"20px"}}>Total Tasks: {totalTasks}</p>
      <p  style={{margin:"20px"}}>Completed Tasks: {completedTasks}</p>
    </div>
  );
};

export default TaskSummary;
