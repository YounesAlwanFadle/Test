// components/Statistics.tsx
import useStatisticsStore from '../Store/Stics';

const Stacs: React.FC = () => {
    const { statistics } = useStatisticsStore();

    return (
        <div>
            <p>Total Tasks: {statistics.totalTasks}</p>
            <p>Tasks Completed: {statistics.tasksCompleted}</p>
        </div>
    );
};

export default Stacs;
