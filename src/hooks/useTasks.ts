import { useState, useEffect, useCallback } from "react";
import { storage } from "../utils/storage";
import type { Task, Priority } from "../types";

const STORAGE_KEY = "focusflow_tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() =>
    storage.get(STORAGE_KEY, [])
  );

  useEffect(() => {
    storage.set(STORAGE_KEY, tasks);
  }, [tasks]);

  const addTask = useCallback(
    (title: string, priority: Priority = "medium") => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
        priority,
        createdAt: Date.now(),
      };
      setTasks((prev) => [newTask, ...prev]);
    },
    []
  );

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  }, []);

  return { tasks, addTask, toggleTask, deleteTask, clearCompleted };
};
