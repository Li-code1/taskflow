import { useState, useMemo } from 'react';
import { AuthContext } from './AuthContext';
import type { User, AuthProviderProps } from './AuthContext';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('@TaskFlow:user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email: string) => {
    const nameFromEmail = email.split('@')[0];
    const userData = { 
      name: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1), 
      email 
    };
    setUser(userData);
    localStorage.setItem('@TaskFlow:user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('@TaskFlow:user');
  };

  const value = useMemo(() => ({
    user,
    login,
    logout
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}