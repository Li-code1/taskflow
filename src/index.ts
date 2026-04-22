export interface Task {
  id: string;
  text: string;
  completed: boolean;
  isDeleted: boolean;
}

export interface User {
  email: string;
  token: string;
}