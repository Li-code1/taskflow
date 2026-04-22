import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

// Interfaces
export interface User {
  name: string;
  email: string;
}

export interface AuthContextData {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export interface AuthProviderProps {
  readonly children: ReactNode;
}