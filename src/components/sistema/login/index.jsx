import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

class Login extends React.Component {

	render() {
		return (
			<div className="center">
				{this.renderizarBotaoRegistrar()}	
				{this.renderizarLogin()}		
			</div>
		);
	}

	renderizarBotaoRegistrar() {
		return (					
			<Link to="/usuario/registro">Registre-se</Link>			
		)
	}

	renderizarLogin() {
		return (			
			<form className="pure-form pure-form-aligned">
    			<fieldset>
        			<div className="pure-control-group">
            			<label htmlFor="aligned-name">Login</label>
            			<input type="text" id="aligned-name" placeholder="login" />            
        			</div>
        			<div className="pure-control-group">
            			<label htmlFor="aligned-password">Senha</label>
            			<input type="password" id="aligned-password" placeholder="Password" />
        			</div>           
        			<div className="pure-controls">            
            			<button type="submit" className="pure-button pure-button-primary">Entrar</button>
        			</div>
    			</fieldset>
			</form>
		)
	}


}

export default Login;