
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import { getTask, updateTask } from '../../services/taskServices';
import { Task } from '../../interfaces/taskInterface';

const task = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });
  
  const getTaskById = async () => {
    if (id) {
      const fetchedTask = await getTask(id as string);
      setTask(fetchedTask);
      setEditedTask(fetchedTask);
    }
  };
  
  useEffect(() => {
    getTaskById();
  }, [id]);
  
  const navigateToHome = () => {
    router.push('/');
  };


  const handleSaveChanges = async () => {
    if (task && id) {
      await updateTask({ ...task, ...editedTask });
      setIsEditing(false);
      getTaskById();
    }
  };


  return (
    <section className="h-screen flex items-center justify-center">
    <div className="bg-white bg-opacity-50 rounded-2xl p-24">
      <div className="flex flex-col">
        {isEditing ? (
          <>
            <input 
              className="text-zinc-900 text-2xl rounded-2xl leading-tight font-['Nunito'] mb-7 border-none"
              value={editedTask.name}
              onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
            />
            <div className="text-indigo-600 text-xl font-bold font-['Inter'] mb-2">Description:</div>
            <textarea 
              className="w-96 h-auto text-zinc-900 text-base rounded-2xl border-none font-normal font-['Nunito'] text-pretty mb-12"
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
          </>
        ) : (
          <>
            <p className="text-zinc-900 text-2xl font-bold font-['Inter'] mb-7">{task?.name}</p>
            <div className="text-indigo-600 text-xl font-bold font-['Inter'] mb-2">Description:</div>
            <div className="w-96 h-auto text-zinc-900 text-base font-normal font-['Inter'] mb-12">{task?.description}</div>
          </>
        )}

        {isEditing ? (
          <>
            <CustomButton 
              styles='mb-4' 
              color="bg-indigo-600" 
              text='Save Changes' 
              onClick={handleSaveChanges} 
              disabled={!editedTask.name || !editedTask.description}
            />
            <CustomButton styles='mb-4' color="bg-rose-500" text='Cancel' onClick={() => setIsEditing(false)} />
          </>
        ) : (
          <>
            <CustomButton styles='mb-4' color="bg-indigo-600" text='Edit Task' onClick={() => setIsEditing(true)} />
            <CustomButton styles='mb-4' color="bg-rose-500" text='Back to tasks' onClick={navigateToHome} />
          </>
        )}
      </div>
    </div>
  </section>
  )
}

export default task