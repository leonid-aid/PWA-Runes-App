import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
    console.log("serWorker start")
  });
}else{
  console.log("serWorker false")
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
