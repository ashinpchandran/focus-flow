export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  priority: Priority;
  createdAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';

