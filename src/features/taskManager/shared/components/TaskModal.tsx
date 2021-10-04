import { useParams } from 'react-router';

import { Modal } from 'antd';

export function TaskModal() {
  const { type, id } = useParams();
  console.log('type', type);
  console.log('id', id);
  return <Modal>{type}</Modal>;
}
