import React from 'react';
import useUserStore from '../Store/Users';

const Users: React.FC = () => {
    const { users, removeUser } = useUserStore();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>
                <div className="space-y-4">
                    {users.map(user => (
                        <div 
                            key={user.id} 
                            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow-sm"
                        >
                            <span className="text-gray-800">{user.name}</span>
                            <button
                                onClick={() => removeUser(user.id)}
                                className=" hover:text-red-700 transition duration-200"
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

export default Users;
