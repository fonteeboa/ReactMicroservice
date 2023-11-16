import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import components from modules
import Dashboard from '../../modules/dashboard/pages';
import ApiConfigPages from '../../modules/apiSettings/pages/general/generalPage';
import ScreenLayout from '../../common/components/layout/screenLayout';
import '../../modules/i18n/i18n';
import { menuItems } from '../../modules/menu/constants';

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
