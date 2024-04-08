import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Task } from '../../interfaces/taskInterface'
import { getTasks, updateTask, deleteTask } from '../../services/taskServices'

import TasksList from './TasksList'
import UserNameDisplay from '../UserNameDisplay/UserNameDisplay'
import CustomButton from '../CustomButton/CustomButton'

export const TasksContainer = () => {
  const router = useRouter();
  const [tasksToDo, setTasksToDo] = useState<Task[]>([]);
  const [tasksDone, setTasksDone] = useState<Task[]>([]);

  const navigateToCreateTask = () => {
    router.push('/task');
  };
    
  const onGetTasks = async () => {
    const tasks = await getTasks();

    const tasksToDo = tasks.filter(task => !task.isComplete);
    const tasksDone = tasks.filter(task => task.isComplete);

    setTasksToDo(tasksToDo);
    setTasksDone(tasksDone);
  };

  const onCompleteTask = async (task) => {
    if (!task.isComplete) {
      const updatedTask = { ...task, isComplete: true };
      await updateTask(updatedTask);

      setTasksToDo(tasksToDo.filter(taskToDo => taskToDo.id !== task.id));
      setTasksDone([...tasksDone, updatedTask]);
    } 
    
    if (task.isComplete) {
      const updatedTask = { ...task, isComplete: false };
      await updateTask(updatedTask);

      setTasksDone(tasksDone.filter(taskDone => taskDone.id !== task.id));
      setTasksToDo([...tasksToDo, updatedTask]);
    }
  };
 
  const onDeleteTask = async (id: number) => {
    await deleteTask(id);
    const updatedTasks = tasksToDo.filter(task => task.id !== id);
    setTasksToDo(updatedTasks);
  };
 
 
   useEffect(() => {
     onGetTasks();
   }, []);
 

  return (
    <>
      <UserNameDisplay name="Barbara" />
      <CustomButton styles='my-20' color="bg-indigo-600" text='Create Task' onClick={navigateToCreateTask} />
      <TasksList tasks={tasksToDo} title="Tasks to do" onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
      <div className="my-10"></div>
      <TasksList tasks={tasksDone} title="Done" onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
    </>
  )
};
