import React from 'react';
import type { Task, Priority } from '../../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityStyles: Record<Priority, string> = {
  low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  high: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 bg-transparent text-brand-primary focus:ring-brand-primary cursor-pointer"
        />
        <div className="flex flex-col">
          <span className={`text-sm font-medium transition-colors ${
            task.isCompleted ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'
          }`}>
            {task.title}
          </span>
          <span className={`inline-block w-fit mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${priorityStyles[task.priority]}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <button onClick={() => onDelete(task.id)} className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-rose-500 transition-all">
        🗑️
      </button>
    </div>
  );
};