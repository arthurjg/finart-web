import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './img/favicon.ico';
import './css/index.css';
import './css/pure-min.css';
import App from './components/App.jsx';
import CadastroUsuario from './components/usuarios/cadastro';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/usuario/registro" component={CadastroUsuario} />
			
		</div>
	</BrowserRouter>,
	document.querySelector("#main")
)