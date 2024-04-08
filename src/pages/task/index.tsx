
import { useRouter } from 'next/router';
import { useState } from 'react';

import { createTask } from '../../services/taskServices';
import CustomButton from '../../components/CustomButton/CustomButton';

const task = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigateToHome = () => {
    router.push('/');
  };

  const onAddTask = async () => {
    const task = {
      name: name,
      description: description,
      isComplete: false,
      author: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const createdTask = await createTask(task);
 
    if(createdTask !== undefined) {
      navigateToHome();
    }
   };


  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-50 rounded-2xl p-24">
        <div className="flex flex-col">
          <input className="text-zinc-900 text-2xl rounded-2xl leading-tight font-['Nunito'] mb-7 border-none" 
            placeholder="Add your task title here..."
            onChange={(e) => setName(e.target.value)}
          />

          <div className="mb-5">  
            <span className="text-indigo-600 text-xl font-bold font-['Inter']">Author: </span>
            <span className="text-zinc-900 text-base font-normal font-['Inter']">Barbara</span>
          </div>

          <div className="mb-12">
            <div className="text-indigo-600 text-xl font-bold font-['Inter'] mb-2">Description:</div>
            <textarea className="w-96 h-auto text-zinc-900 text-base rounded-2xl border-none font-normal font-['Nunito'] text-pretty" 
              placeholder="Describe yor task here ..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <CustomButton styles='mb-4' color="bg-indigo-600" text='Add Task' onClick={onAddTask} />
          <CustomButton styles='mb-4' color="bg-rose-500" text='Back to tasks' onClick={navigateToHome} />
        </div>

      </div>
  </section>
  )
}

export default task;