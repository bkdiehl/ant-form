import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import { tasks } from 'src/features/taskManager/shared/hooks/taskHooks';

export default function Tasks() {
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
    </>
  );
}
