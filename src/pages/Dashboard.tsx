import { useState, useEffect, useContext } from 'react';
import type { SyntheticEvent } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Trash2, 
  CheckCircle, 
  Circle, 
  LogOut, 
  Layout, 
  Pencil, 
  Check 
} from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [taskText, setTaskText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('@TaskFlow:tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('@TaskFlow:tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    
    const newTask: Task = { 
      id: String(Date.now()), 
      title: taskText, 
      completed: false 
    };
    
    setTasks([newTask, ...tasks]);
    setTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };

  const saveEdit = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, title: editValue } : t));
    setEditingId(null);
  };

  const handleLogoutAction = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <Layout size={24} />
            <span className="text-slate-800 tracking-tight">TaskFlow</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Usuário(a)
              </p>
              <p className="text-sm font-bold text-blue-600">
                {user?.name || 'Visitante'}
              </p>
            </div>
            
            <button 
              onClick={handleLogoutAction} 
              className="flex items-center gap-1 p-2 text-slate-500 hover:text-red-600 transition-colors font-medium text-sm"
              title="Encerrar sessão"
            >
              <span>Sair</span>
              <LogOut size={18}/>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full p-6">
        <form onSubmit={handleAddTask} className="flex gap-2 mb-10">
          <input 
            type="text" 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="O que vamos construir hoje?" 
            className="flex-1 bg-white border-2 border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-blue-500 transition-all shadow-sm"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 shadow-md transition-all active:scale-95"
          >
            <Plus size={24}/>
          </button>
        </form>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={`flex items-center gap-4 p-5 bg-white border-2 rounded-2xl transition-all ${
                task.completed ? 'opacity-70 border-slate-100 bg-slate-50' : 'border-white shadow-sm'
              }`}
            >
              <button 
                onClick={() => toggleTask(task.id)} 
                className={`transition-transform active:scale-90 ${task.completed ? 'text-green-500' : 'text-slate-300'}`}
              >
                {task.completed ? <CheckCircle size={26}/> : <Circle size={26}/>}
              </button>

              {editingId === task.id ? (
                <div className="flex-1 flex gap-2">
                  <input 
                    className="flex-1 border-b-2 border-blue-500 outline-none font-semibold py-1 bg-transparent"
                    value={editValue} 
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id)}
                    autoFocus
                  />
                  <button onClick={() => saveEdit(task.id)} className="text-green-600">
                    <Check size={20}/>
                  </button>
                </div>
              ) : (
                <span className={`flex-1 font-semibold text-slate-700 ${task.completed ? 'line-through text-slate-400 italic' : ''}`}>
                  {task.title}
                </span>
              )}

              <div className="flex gap-2 border-l pl-4 border-slate-100">
                {!task.completed && editingId !== task.id && (
                  <button onClick={() => startEdit(task)} className="p-2 text-slate-400 hover:text-blue-600 transition-all">
                    <Pencil size={20}/>
                  </button>
                )}
                <button 
                  onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} 
                  className="p-2 text-slate-400 hover:text-red-600 transition-all"
                >
                  <Trash2 size={20}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
