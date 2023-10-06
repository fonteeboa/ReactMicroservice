import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components from modules
import Dashboard from '../dashboard/components/tabs/dashboard';
import ApiConfigScreen from '../apiSettings/components/tabs/apiSettings';
import Sidebar from '../../common/components/sidebar/sidebar';

import '../../common/i18n/i18n';
const { Sider, Content } = Layout;

function AppRouter() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={215} theme="dark">
            <Sidebar />
        </Sider>
        <Layout>
          <Content style={{ padding: '16px', width: 'calc(100% - 215px)' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/apiSettings" element={<ApiConfigScreen />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default AppRouter;
