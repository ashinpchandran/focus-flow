# 🎯 FocusFlow

A high-performance, professional task management dashboard built with **React 18**, **TypeScript**, and **Tailwind CSS**. Designed for developers who need a clean, focused workspace with seamless theme transitions.

## 🚀 [Live Demo](https://focus-flow-six-mauve.vercel.app/)

<img width="1439" height="692" alt="image" src="https://github.com/user-attachments/assets/9f9b88cc-c962-4640-b00b-23bd73eeee62" />

---

## ✨ Features

- **🌓 Dynamic Dark Mode:** System-aware theme detection with a manual toggle and persistent state.
- **📊 Productivity Analytics:** Real-time progress tracking with a visual percentage bar and task stats.
- **⚡ Performance Optimized:** Uses Derived State and `useMemo` to ensure zero unnecessary re-renders during filtering.
- **💾 Local Persistence:** Automatic synchronization with `localStorage` so you never lose your data.
- **🎨 Premium UI:** Styled with a modern slate palette, mesh gradients, and fully responsive grid layouts.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) (Vite)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** Custom React Hooks
- **Icons:** Native Emojis / Heroicons

---

## 🧠 Key Architectural Decisions

- **Derived State Pattern:** Instead of storing "filtered tasks" in a separate state (which leads to sync bugs), the app derives the list to display based on the `filter` state during the render cycle.
- **Custom Hook Encapsulation:** All business logic for task CRUD operations is abstracted into `useTasks.ts`, keeping the UI components clean and focused on presentation.
- **Responsive Grid:** Implemented a 12-column grid system that intelligently stacks on mobile devices while maintaining a dashboard "sidebar" feel on desktop.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/ashinpchandran/focus-flow.git](https://github.com/ashinpchandran/focus-flow.git)
