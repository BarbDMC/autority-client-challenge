import axios from 'axios';
import { Task } from '../interfaces/taskInterface';
import { axiosInstance } from '../config/axiosInstance';


export const getTasks = async () => {
  try {
    const response = await axiosInstance.get('tasks');
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {

      console.error("Axios error data:", error.response?.data);
      const errorMessage = error.response?.data?.message || 'Failed to fetch tasks';
      console.error("Axios error message:", errorMessage);

    } else {

      console.error("Non-Axios error:", error);
      console.error('An unexpected error occurred');

    }
  }
}

export const createTask = async (task: Task) => {
  try {
    const response = await axiosInstance.post('task', task);
    return response.data.todo;

  } catch (error) {
    if (axios.isAxiosError(error)) {

      console.error("Axios error data:", error.response?.data);
      const errorMessage = error.response?.data?.message || 'Failed to add the task';
      console.error("Axios error message:", errorMessage);

    } else {

      console.error("Non-Axios error:", error);
      console.error('An unexpected error occurred');

    }
  }
};

export const updateTask = async (task: Task) => {
  try {
    const response = await axiosInstance.put(`task/${task.id}`, task);
    return response.data.todo;

  } catch (error) {
    if (axios.isAxiosError(error)) {

      console.error("Axios error data:", error.response?.data);
      const errorMessage = error.response?.data?.message || 'Failed to update the task';
      console.error("Axios error message:", errorMessage);

    } else {

      console.error("Non-Axios error:", error);
      console.error('An unexpected error occurred');

    }
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`task/${id}`);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {

      console.error("Axios error data:", error.response?.data);
      const errorMessage = error.response?.data?.message || 'Failed to delete the task';
      console.error("Axios error message:", errorMessage);

    } else {

      console.error("Non-Axios error:", error);
      console.error('An unexpected error occurred');

    }
  }
};