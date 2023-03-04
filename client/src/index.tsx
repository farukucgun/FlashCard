import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// strict mode causes components to render twice to check for errors

root.render(
  <React.StrictMode>     
    <App />
  </React.StrictMode>
);
