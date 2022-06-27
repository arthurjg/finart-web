import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../../service/sistema/loginService';
import SessionService from '../../service/sistema/sessionService'; 
import LoginSubmit from './loginSubmit';

export default function Login() {

	let [login, setLogin] = useState(""); 
	let [senha, setSenha] = useState("");	
	let navigate = useNavigate();

	function loginSubmit(event) {
    	event.preventDefault();
    	console.log("login...");     	   

    	var sucesso = function(usuario) {
      		SessionService.salvarUsuario(usuario);  
      		console.log("salvou sessao...");    
      
      		console.log("history...");
      		navigate('/principal'); 
    	};

    	LoginService.login(login, senha, sucesso);

  	}

	return (
		<div className="center">
			<Link to="/usuario/registro">Registre-se</Link>
			<Link to="/principal">Dash</Link>
			<form className="pure-form pure-form-aligned">
    			<fieldset>
        			<div className="pure-control-group">
            			<label htmlFor="aligned-name">Login</label>
            			<input type="text" id="aligned-name" placeholder="login"
            				onChange={(e) => setLogin(e.target.value)} />            
        			</div>
        			<div className="pure-control-group">
            			<label htmlFor="aligned-password">Senha</label>
            			<input type="password" id="aligned-password" placeholder="Password"
            				onChange={(e) => setSenha(e.target.value)} />
        			</div>           
        			<div className="pure-controls">            
            			<button type="submit" className="pure-button pure-button-primary"
                    		onClick={e => loginSubmit(e)}>
                    		Entrar
        				</button>
        			</div>
    			</fieldset>
			</form>		
		</div>
	);			

	/*setLogin(e) {		
		this.state.login = e.target.value;		
	}

	setSenha(e) {
		this.state.senha = e.target.value;	
	}*/

}

