import { Link, Outlet } from 'react-router-dom';

import { tasks } from 'src/features/taskManager/shared/api/taskHooks';
import { TaskModal } from 'src/features/taskManager/shared/components/TaskModal';

import { useFeatureContext } from './../../../providers/Feature';

export default function Tasks() {
  const config = useFeatureContext<{ canView: boolean }>();

  return (
    <>
      <h1>Tasks</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
      <TaskModal />
    </>
  );
}
