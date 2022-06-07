import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import './pure-min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CadastroUsuario from './components/usuarios/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />    
        <Route exact path="/usuario/registro" component={CadastroUsuario} />  
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
