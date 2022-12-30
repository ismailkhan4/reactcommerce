import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Context } from './context/Context';

import './index.css';

// Importing the Bootstrap 5 CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Import React Toastify
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
