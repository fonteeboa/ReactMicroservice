import React from 'react';
import ChartGrid from '../../../../common/components/base-layouts/ChartGrid';
import { chartData } from './constants/constants';
const Dashboard: React.FC = () => {
  return (
      <ChartGrid data={chartData} pageTitle="Dashboard"/>
  );
};

export default Dashboard;
