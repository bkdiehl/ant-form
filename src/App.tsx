import './App.css';

import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { AppRoutes } from 'src/routes';

import { useFeatureStore } from './stores/feature';
import { useProgramStore } from './stores/program';

function App() {
  const { setProgram } = useProgramStore();
  const { setFeatures } = useFeatureStore();

  useEffect(() => {
    setTimeout(() => {
      setProgram({
        id: 1,
        key: 'program1',
        features: ['tasks', 'microManager'],
        menuItems: [
          { path: '/tasks', title: 'Tasks' },
          { path: '/microManager', title: 'Micro Manager' },
        ],
      });
    }, 300);
    setTimeout(() => {
      setFeatures({
        tasks: { canView: true },
        microManager: { isMicroManager: false },
      });
    }, 500);
  }, [setProgram, setFeatures]);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Layout style={{ padding: '15px' }}>{children}</Layout>
    </Layout>
  );
};

const SideBar = () => {
  const { program } = useProgramStore();
  return (
    <Sider>
      <Menu theme="dark" mode="inline">
        {program?.menuItems.map((menuItem, index) => (
          <Menu.Item key={index}>
            <Link to={menuItem.path}>{menuItem.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
