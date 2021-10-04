import { useState } from 'react';
import { useHistory } from 'react-router';

import { Modal } from 'antd';

export default function TestModal() {
  const [visible, setVisible] = useState(true);
  const history = useHistory();

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      history.go(-1);
    }, 150);
  };
  return (
    <Modal visible={visible} onCancel={handleClose}>
      <h1>Hello Modal</h1>
    </Modal>
  );
}
