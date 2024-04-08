import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAddTask({ 
        name: inputValue,
        isComplete: false,
        description: '',
        author: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      });
        
      setInputValue('');
    }
  };
  
  return (
    <div className="my-20 flex justify-center items-center">
      <div className="bg-white rounded-lg mr-2 w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="w-full h-10 px-4 text-base border-none font-normal text-neutral-500 bg-transparent rounded-lg focus:outline-none"
        />
      </div>
      <button onClick={handleAddClick} className="w-10 h-10 bg-indigo-600 rounded-lg text-white">+</button>
    </div>
  )
};

export default TaskInput;
