export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type PartialTask = Partial<Task>;
