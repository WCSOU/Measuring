import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home/home';
import CadastroPage from './pages/cadastro/cadastro';
import LoginPage from './pages/login/login';
import ErroPage from './pages/erro/erroPage';
import ArranjoPage from './pages/arranjo-de-flores/arranjoPage';
import BuquePage from './pages/buque-flor/buquePage';
import CestaPage from './pages/cesta-de-flores/cestaPage';
import PresentesPage from './pages/presentes/presentesPage';
import VazoPage from './pages/vazo-de-flores/vazoPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//   },
//   {
//     path: "/Cadastro",
//     element: <CadastroPage/>
//   },
//   {
//     path: "/Login",
//     element: <LoginPage/>
//   }
// ])

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/Cadastro",
        element: <CadastroPage/>
      },
      {
        path: "/Login",
        element: <LoginPage/>
      },
      {
        path: "/buque-flor",
        element: <BuquePage/>
      },
      {
        path: "/arranjo-de-flor",
        element: <ArranjoPage/>
      },
      {
        path: "/vazo-de-flor",
        element: <VazoPage/>
      },
      {
        path: "/cesta-de-flores",
        element: <CestaPage/>
      },
      {
        path: "/presentes",
        element: <PresentesPage/>
      },
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

reportWebVitals();
