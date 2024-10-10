import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.Fragment>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Fragment>
);
