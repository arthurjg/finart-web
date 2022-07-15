import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../../service/sistema/loginService';
import SessionService from '../../service/sistema/sessionService'; 
import PrincipalLayout from '../../components/layouts/principal';

export default function Login() {

	let [login, setLogin] = useState(""); 
	let [senha, setSenha] = useState("");	
	let navigate = useNavigate();

	function loginSubmit(event) {
    	event.preventDefault();    	  	   

    	var sucesso = function(usuario) {
      		SessionService.salvarUsuario(usuario);     
      		
      		navigate('/principal'); 
    	};

    	LoginService.login(login, senha, sucesso);

  	}

	return (
		<PrincipalLayout>
			<div className="center">
				<Link to="/usuario/registro">Registre-se</Link>				
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
		</PrincipalLayout>
	);		

}

