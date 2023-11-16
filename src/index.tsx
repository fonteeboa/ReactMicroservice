import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Importe CSS
import { importCSS } from './common/styles/cssImports';
// Importe componente
import App from './modules/main';
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
