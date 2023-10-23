import React from 'react';
import AppRouter from '../routes/AppRouter';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App: React.FC = () => (
      <AppRouter />
);

export default App;
