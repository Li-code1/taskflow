import { createContext } from 'react';
import type { ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
}

export interface AuthContextData {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  readonly children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);