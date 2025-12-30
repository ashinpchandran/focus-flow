import React, { useState } from 'react';
import type { Priority } from '../../types';

interface TaskInputProps {
  onAdd: (title: string, priority: Priority) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), priority);
    setTitle('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border-slate-200 bg-slate-50/50 placeholder:text-slate-400 text-sm transition-all"
      />
      
      <div className="flex gap-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="flex-1 px-3 py-2 border rounded-lg bg-white text-xs font-bold uppercase tracking-wider border-slate-200 cursor-pointer focus:outline-none hover:bg-slate-50 transition-colors"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          disabled={!title.trim()}
          className="px-6 py-2 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-md shadow-brand-primary/20 disabled:opacity-50 disabled:shadow-none"
        >
          Add
        </button>
      </div>
    </form>
  );
};