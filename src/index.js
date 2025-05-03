import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { AuthProvider } from './componets/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  
    <React.StrictMode>
    <HashRouter basename='/Ecommerce-Ostora-shop'>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
    </React.StrictMode>
  
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
