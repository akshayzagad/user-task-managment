export interface Tasks {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface addTaskData {
  summary:string;
  date:string;
  title:string;
}