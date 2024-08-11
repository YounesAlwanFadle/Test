import create from 'zustand';

interface Task {
    id: string;
    name: string;
    completed: boolean;
}

interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'), // استرجاع المهام من localStorage
    addTask: (task) => set((state) => {
        const updatedTasks = [...state.tasks, task];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // حفظ المهام في localStorage
        return { tasks: updatedTasks };
    }),
    toggleTask: (id) => set((state) => {
        const updatedTasks = state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // حفظ المهام في localStorage
        return { tasks: updatedTasks };
    }),
    removeTask: (id) => set((state) => {
        const updatedTasks = state.tasks.filter((task) => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // حفظ المهام في localStorage
        return { tasks: updatedTasks };
    }),
}));

export default useTaskStore;
