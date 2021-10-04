import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Drawer, DrawerProps } from 'antd';

type Props = DrawerProps;

export const RoutedDrawer: React.FC<Props> = ({ ...props }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 0);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      history.push('./');
    }, 150);
  };

  return <Drawer {...props} visible={visible} onClose={handleClose}></Drawer>;
};
