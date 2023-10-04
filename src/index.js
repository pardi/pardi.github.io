import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Global.module.scss'
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.cookie = "dummycookie=1; samesite=strict; secure; max-age=1";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
