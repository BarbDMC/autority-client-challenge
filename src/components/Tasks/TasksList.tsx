import Image from 'next/image';
import { useRouter } from 'next/router';
import deleteIcon from '../../../public/deleteIcon.svg';

const TasksList = ({ tasks, title, onDeleteTask, onCompleteTask }) => {
  const router = useRouter();

  const navigateToTask = (taskId) => {
    router.push(`/task/${taskId}`);
  };

  return (
    <>
      <h2 className="text-left text-xl text-gray-700 font-semibold mb-4">{title} - {tasks.length}</h2>
      
      {tasks.map((task, index) => (
        <div key={index} className="flex justify-between items-center w-full h-20 px-7 mb-5 rounded-xl bg-[#f9fafc]">
          
          <div className="inline-flex items-center">
            <input type="checkbox" className="w-6 h-6 rounded-full cursor-pointer" onClick={() => onCompleteTask(task)} checked={task.isComplete } onChange={() => {}} />
            <span onClick={() => navigateToTask(task.id)} className={`ml-4 cursor-pointer hover:underline ${task.isComplete ? 'line-through' : ''}`}>{task.name}</span>
          </div>

          <Image
            className='cursor-pointer'
            src={deleteIcon}
            alt="My SVG"
            data-testid="delete-icon"
            width={30}
            height={30}
            onClick={() => onDeleteTask(task.id)}
          />
        </div>
      ))}
    </>
  )
};

export default TasksList;
