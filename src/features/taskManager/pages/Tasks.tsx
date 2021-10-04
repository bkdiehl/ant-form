import { Link } from 'react-router-dom';

import { RoutesWithSubRoutes } from 'src/components';
import { TaskModal } from 'src/features/taskManager/shared/components/TaskModal';
import { tasks } from 'src/features/taskManager/shared/hooks/taskHooks';

export default function Tasks({ routes }) {
  return (
    <>
      <h1>Tasks</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>

      <RoutesWithSubRoutes routes={routes} />
      <TaskModal />
    </>
  );
}
