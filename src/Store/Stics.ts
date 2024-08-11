// stores/statisticsStore.ts
import create from 'zustand';

interface Statistics {
    tasksCompleted: number;
    totalTasks: number;
}

interface StatisticsState {
    statistics: Statistics;
    updateStatistics: (newStats: Statistics) => void;
}

const useStatisticsStore = create<StatisticsState>((set) => ({
    statistics: {
        tasksCompleted: 0,
        totalTasks: 0,
    },
    updateStatistics: (newStats) => set({ statistics: newStats }),
}));

export default useStatisticsStore;
