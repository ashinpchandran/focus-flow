import { useState, useMemo } from 'react';
import { useTasks } from './hooks/useTasks';
import { useTheme } from './hooks/useTheme';
import { TaskInput } from './components/tasks/TaskInput';
import { TaskList } from './components/tasks/TaskList';
import { TaskFilters } from './components/tasks/TaskFilters';
import { ThemeToggle } from './components/ui/ThemeToggle';
import type { FilterType } from './types';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks();
  const { theme } = useTheme();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active': return tasks.filter((t) => !t.isCompleted);
      case 'completed': return tasks.filter((t) => t.isCompleted);
      default: return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.isCompleted).length,
    percentage: tasks.length > 0 ? Math.round((tasks.filter(t => t.isCompleted).length / tasks.length) * 100) : 0
  }), [tasks]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased relative overflow-hidden transition-colors duration-300">
        
        {/* Background Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 dark:bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto py-12 px-6 relative z-10">
          
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
                <span className="text-2xl font-bold">F</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">FocusFlow</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Productivity Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider font-semibold">Workspace: Personal</p>
              </div>
              <ThemeToggle />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-colors">
                <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Quick Add</h2>
                <TaskInput onAdd={addTask} />
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-colors">
                <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Progress</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="text-3xl font-bold dark:text-white">{stats.percentage}%</p>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{stats.completed}/{stats.total}</p>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-primary h-full transition-all duration-700 shadow-[0_0_8px_rgba(99,102,241,0.4)]" 
                      style={{ width: `${stats.percentage}%` }} 
                    />
                  </div>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <TaskFilters currentFilter={filter} onFilterChange={setFilter} />
                {stats.completed > 0 && (
                  <button onClick={clearCompleted} className="text-xs font-bold text-rose-500 dark:text-rose-400 hover:text-rose-600 uppercase tracking-wider transition-colors">
                    Clear Completed
                  </button>
                )}
              </div>
              <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;