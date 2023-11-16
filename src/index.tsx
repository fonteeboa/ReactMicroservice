import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './shared/reportWebVitals';
// Importe CSS
import { importCSS } from './common/assets/styles/cssImports';
// Importe componente
import App from './shared/main';
import WarningPageScreenSize from './common/components/layout/warningPageScreenSize';

importCSS();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

const rootScreenSize = ReactDOM.createRoot(
  document.getElementById('rootScreenSize') as HTMLElement
);

rootScreenSize.render(<WarningPageScreenSize />);

reportWebVitals();
