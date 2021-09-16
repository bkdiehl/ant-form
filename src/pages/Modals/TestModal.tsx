import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Modal } from 'antd';

export default function TestModal() {
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      navigate(-1);
    }, 150);
  };
  return (
    <Modal visible={visible} onCancel={handleClose}>
      <h1>Hello Modal</h1>
    </Modal>
  );
}
