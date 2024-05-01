
// import React, { useState } from 'react';
// import './index.css'
// const TaskAssign = ({ users, assignTask }) => {
//   const [selectedUser, setSelectedUser] = useState('');

//   const handleChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   const handleAssign = () => {
//     if (!selectedUser) return;
//     assignTask(selectedUser);
//     setSelectedUser('');
//   };

//   return (
//     <div className='task-assign-container'>
//       <select className='task-assign-select' value={selectedUser} onChange={handleChange}>
//         <option className='option' value="">Select User</option>
//         {users.map((user) => (
//           <option className='option' key={user.id} value={user.id}>
//             {user.name}
//           </option>
//         ))}
//       </select>
//       <button className='task-assign-button' onClick={handleAssign}>Assign Task</button>
//     </div>
//   );
// };

// export default TaskAssign;


import React, { useState } from 'react';
import './index.css';

const TaskAssign = ({ users, assignTask }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleAssign = () => {
    if (selectedUser) { // Check if selectedUser is defined
      assignTask(selectedUser);
      setSelectedUser('');
    }
  };

  return (
    <div className='task-assign-container'>
      <select className='task-assign-select' value={selectedUser} onChange={handleChange}>
        <option className='option' value="">Select User</option>
        {users.map((user) => (
          <option className='option' key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button className='task-assign-button' onClick={handleAssign}>Assign Task</button>
    </div>
  );
};

export default TaskAssign;
