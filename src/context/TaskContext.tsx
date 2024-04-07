import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../interfaces/taskInterface';

interface TaskContextType {
  currentTask: Task | null;
  setCurrentTask: (task: Task | null) => void;
}

const TaskContext = createContext<TaskContextType>({
  currentTask: null,
  setCurrentTask: () => {}
});

export const useTasks = () => useContext(TaskContext);

export const TaskProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  return (
    <TaskContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </TaskContext.Provider>
  );
};

