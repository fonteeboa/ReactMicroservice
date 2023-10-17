import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Importe CSS
import { importCSS } from './common/styles/cssImports';
// Importe componente
import App from './domain/main/App';
import WarningPageScreenSize from './common/components/layout/WarningPageScreenSize';

importCSS();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootScreenSize = ReactDOM.createRoot(
  document.getElementById('rootScreenSize') as HTMLElement
);
rootScreenSize.render(
  <React.StrictMode>
    <WarningPageScreenSize />
  </React.StrictMode>
);

reportWebVitals();
