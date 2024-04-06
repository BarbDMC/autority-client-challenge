const TasksList = ({ tasks, title }) => (
  <>
    <h2 className="text-xl text-gray-700 font-semibold mb-4">{title} - {tasks.length}</h2>
    {tasks.map((task, index) => (
      <div key={index} className="flex justify-between items-center w-full h-20 px-7 rounded-xl bg-[#f9fafc]">
        <label className="inline-flex items-center">
          <input type="checkbox" className="w-6 h-6 rounded-full" checked={task.done} />
          <span className={`ml-4 ${task.done ? 'line-through' : ''}`}>{task.label}</span>
        </label>
        {/* The delete icon SVG goes here */}
      </div>
    ))}
  </>
);

export default TasksList;
