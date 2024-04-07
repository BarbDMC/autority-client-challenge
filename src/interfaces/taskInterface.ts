
export interface Task {
  id?: number;
  name: string;
  description: string;
  author: string;
  isComplete: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
