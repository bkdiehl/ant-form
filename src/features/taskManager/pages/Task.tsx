import { useParams } from 'react-router';

import { RoutedDrawer } from 'src/components';
import { tasks } from 'src/features/taskManager/shared/hooks/taskHooks';

export default function Task() {
  const { id } = useParams();

  const task = tasks.find((task) => task.id == Number(id));

  return (
    <RoutedDrawer width="800px" mask={false}>
      <h1>Task: {task?.title}</h1>
    </RoutedDrawer>
  );
}
