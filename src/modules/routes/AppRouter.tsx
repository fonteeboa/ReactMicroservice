import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import components from modules
import Dashboard from '../dashboard/components/tabs';
import ApiConfigScreen from '../apiSettings/components/tabs/ApiSettings';
import ScreenLayout from '../../common/components/layout/screenLayout';
import '../i18n/i18n';
import { menuItems } from '../menu/domain';

function AppRouter() {
  return (
    <Router>
      <ScreenLayout menuItems={menuItems}>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apiSettings" element={<ApiConfigScreen />} />
        </Routes>
      </ScreenLayout>
    </Router>

  );
}

export default AppRouter;
