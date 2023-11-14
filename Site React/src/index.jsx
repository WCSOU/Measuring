import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home/home';
import { createBrowserRouter } from 'react-router-dom';

//const Router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <HomePage/>,
//       errorElement: <h1>404<br/> Página não encontrada!</h1>
//     },
//   ]
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);

reportWebVitals();
