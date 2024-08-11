import React, { useState } from 'react';
import useTaskStore from '../Store/Todo';

const Todos: React.FC = () => {
    const { tasks, addTask, toggleTask, removeTask } = useTaskStore();
    const [newTaskName, setNewTaskName] = useState('');

    const handleAddTask = () => {
        if (newTaskName.trim() === '') return;

        const newTask = {
            id: Date.now().toString(),
            name: newTaskName,
            completed: false,
        };

        addTask(newTask);
        setNewTaskName('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Todo List</h2>
                <div className="flex mb-6">
                    <input
                        type="text"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        placeholder="Enter a new task"
                        className="flex-grow p-3 text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={handleAddTask}
                        className="p-3 bg-purple-600 text-white font-semibold rounded-r-lg hover:bg-purple-700 transition duration-200"
                    >
                        Add Task
                    </button>
                </div>
                <div className="space-y-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                                task.completed ? 'bg-green-300' : 'bg-gray-200'
                            }`}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className="mr-3 h-5 w-5 text-purple-600 focus:ring-purple-500"
                                />
                                <span
                                    className={`text-lg ${
                                        task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                                    }`}
                                >
                                    {task.name}
                                </span>
                            </div>
                            <button
                                onClick={() => removeTask(task.id)}
                                className="text-red-500 hover:text-red-700 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todos;
