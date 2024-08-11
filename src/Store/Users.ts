import create from 'zustand';

interface User {
    id: string;
    name: string;
}

interface UserStore {
    users: User[];
    addUser: (user: User) => void;
    removeUser: (id: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
    users: JSON.parse(localStorage.getItem('users') || '[]'), 
    addUser: (user) => set((state) => {
        const updatedUsers = [...state.users, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers)); 
        return { users: updatedUsers };
    }),
    removeUser: (id) => set((state) => {
        const updatedUsers = state.users.filter((user) => user.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        return { users: updatedUsers };
    }),
}));

export default useUserStore;
