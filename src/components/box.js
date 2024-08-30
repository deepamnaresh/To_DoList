// import React, { useState } from 'react';

// const ToDo = () => {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTask = () => {
//     if (inputValue.trim()) {
//       setTasks([...tasks, { text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   const handleToggleTask = (index) => {
//     const newTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(newTasks);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">To-Do List</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a new task"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//         <button
//           onClick={handleAddTask}
//           className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Add
//         </button>
//       </div>
//       <ul className="list-none p-0">
//         {tasks.map((task, index) => (
//           <li key={index} className="flex items-center justify-between mb-2">
//             <span
//               className={`flex-grow cursor-pointer ${
//                 task.completed ? 'line-through text-gray-500' : ''
//               }`}
//               onClick={() => handleToggleTask(index)}
//             >
//               {task.text}
//             </span>
//             <button
//               onClick={() => handleDeleteTask(index)}
//               className="ml-4 p-1 text-red-500 hover:text-red-700"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDo;

import React, { useState } from "react";

const ToDo = () => {
  let [value, setvalue] = useState("");
  let [data, setData] = useState([]);
  const hadleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleClick = (e) => {
    setData([...data, value]);
    setvalue("");
  };
  const handleDelete = (id) => {
    let arr = data.filter((element,i) => i !== id)
    setData(arr);
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={hadleChange}
          value={value}
        />
        <button
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      {data.map((val, idx) => {
        return (
          <ul className="list-none p-0">
            <li className="flex items-center justify-between mb-2">
              <span className="flex-grow cursor-pointer" key={idx}>
                {val}
              </span>
              <button
                className="ml-4 p-1 text-red-500 hover:text-red-700"
                onClick={() => handleDelete(idx)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ToDo;
