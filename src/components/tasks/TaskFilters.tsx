import React from 'react';
import type { FilterType } from '../../types';

interface TaskFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({ currentFilter, onFilterChange }) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit border border-slate-200 dark:border-slate-700">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
            currentFilter === filter
              ? 'bg-white dark:bg-slate-700 text-brand-primary dark:text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};