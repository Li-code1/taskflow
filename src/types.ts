
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

export interface AuthContextData {
  user: User | null;
  signed: boolean;
  login: (email: string) => void;
  logout: () => void;
}