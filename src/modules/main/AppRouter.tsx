import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components from modules
import Dashboard from '../dashboard/components/tabs/dashboard';

import '../../common/i18n/i18n.tsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
