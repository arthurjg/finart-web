import React from 'react'

class CadastroUsuario extends React.Component {

	render() {
		return (
			<div className="center">
				{this.renderizarTitulo()}
				{this.renderizarCadastro()}						
			</div>
		);
	}

	renderizarTitulo() {
		return (
			<h1> Cadastro de Usuários </h1>
		)
	}

	renderizarCadastro() {
		return (			
			<form className="pure-form pure-form-aligned">
    			<fieldset>
        			<div className="pure-control-group">
            			<label>Nome</label>
            			<input type="text" />            
        			</div>
        			<div className="pure-control-group">
            			<label>Data Nascimento</label>
            			<input type="text" />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Celular</label>
            			<input type="text" />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Email</label>
            			<input type="text" />            
        			</div>      
        			<label>Idioma</label>
        			<select id="stacked-state">
            			<option>Português</option>
            			<option>Inglês</option>            			
        			</select>  	
        			<div className="pure-control-group">
            			<label>Senha</label>
            			<input type="password" />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Confirmar Senha</label>
            			<input type="password" />            
        			</div>  		          
        			<div className="pure-controls">            
            			<button type="submit" className="pure-button pure-button-primary">Entrar</button>
        			</div>
    			</fieldset>
			</form>			
		)
	}


}

export default CadastroUsuario;