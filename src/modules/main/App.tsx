import React from 'react';
import { Col, Row } from 'antd';
import AppRouter from './AppRouter';
import Sidebar from '../../common/components/sidebar/sidebar';

const App: React.FC = () => (
  <Row>
    <Col span={10}>
      <Sidebar />
    </Col>
    <Col span={14}>
      <AppRouter />
    </Col>
  </Row>
);

export default App;
