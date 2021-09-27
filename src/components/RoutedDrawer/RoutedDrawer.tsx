import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Drawer, DrawerProps } from 'antd';

type Props = DrawerProps;

export const RoutedDrawer: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 0);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      navigate('..');
    }, 150);
  };

  return <Drawer {...props} visible={visible} onClose={handleClose}></Drawer>;
};
