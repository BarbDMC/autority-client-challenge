
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomButton from "../../features/CustomButton";
import { getTask } from '../../services/taskServices';
import { Task } from '../../interfaces/taskInterface';

const task = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState<Task | null>(null);
  
  const getTaskById = async () => {
    if (id) {
      const fetchedTask = await getTask(id as string);
      setTask(fetchedTask);
    }
  };
  
  useEffect(() => {
    getTaskById();
  }, [id]);
  
  const navigateToHome = () => {
    router.push('/');
  };


  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-50 rounded-2xl p-24">
        <div className="flex flex-col">
          <p className="text-zinc-900 text-2xl font-bold font-['Inter'] mb-7">{task?.name}</p>
          <div className="mb-5">
            <span className="text-indigo-600 text-xl font-bold font-['Inter']">Author: </span>
            <span className="text-zinc-900 text-base font-normal font-['Inter']">{task?.author}</span>
          </div>
          <div className="mb-12">
            <div className="text-indigo-600 text-xl font-bold font-['Inter'] mb-2">Description:</div>
            <div className="w-96 h-auto text-zinc-900 text-base font-normal font-['Inter'] text-pretty">{task?.description}</div>
          </div>
          
          
          <CustomButton styles='mb-4' color="bg-indigo-600" text='Edit Task'  />
          <CustomButton styles='mb-4' color="bg-rose-500" text='Back to tasks' onClick={navigateToHome} />
        </div>
      </div>
    </section>
  )
}

export default task