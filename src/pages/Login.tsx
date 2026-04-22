import { useState, useContext } from 'react';
import type { SyntheticEvent } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { LogIn } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    
    if (email && password) {
      login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 mb-4">
            <LogIn size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Bem-vinda ao TaskFlow</h1>
          <p className="text-slate-500 text-sm">Entre para gerir as suas tarefas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* label associada ao input via htmlFor + id */}
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
              E-mail
            </label>
            <input 
              id="email"
              type="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            {/* label associada ao input via htmlFor + id */}
            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
              Palavra-passe
            </label>
            <input 
              id="password"
              type="password" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}