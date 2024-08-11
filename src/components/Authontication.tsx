// components/AuthStatus.tsx
import React from 'react';
import useAuthStore from '../Store/Authontication';

const Authontication: React.FC = () => {
    const { user, isAuthenticated, login, logout } = useAuthStore();

    const handleLogin = () => {
        const sampleUser = {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
        };
        login(sampleUser);
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {user?.name}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default Authontication;
