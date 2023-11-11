import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import components from modules
import Dashboard from '../dashboard/components/tabs';
import ApiConfigPages from '../apiSettings/pages/apiSettings';
import ScreenLayout from '../../common/components/layout/screenLayout';
import '../i18n/i18n';
import { menuItems } from '../menu/domain';

function AppRouter() {
  return (
    <Router>
      <ScreenLayout menuItems={menuItems}>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apiSettings" element={<ApiConfigPages />} />
        </Routes>
      </ScreenLayout>
    </Router>

  );
}

export default AppRouter;
