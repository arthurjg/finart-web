import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import './pure-min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CadastroUsuario from './pages/usuarios/cadastro';
import Dashboard from './pages/home/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />    
        <Route path="/usuario/registro" element={<CadastroUsuario/>} />  
        <Route path="/principal" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
