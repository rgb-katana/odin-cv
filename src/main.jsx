import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ResumeProvider } from './context/ResumeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </React.StrictMode>,
);
