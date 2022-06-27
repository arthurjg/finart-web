import React from 'react'
import Usuario from '../../../model/usuario'
import UsuarioService from '../../../service/usuario/usuarioService'

class CadastroUsuario extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			usuario: new Usuario(),
			validacao: {
				senha: null
			}
		}
	}

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
            			<input type="text" onChange={this.setNome.bind(this)} />            
        			</div>
        			<div className="pure-control-group">
            			<label>Data Nascimento</label>
            			<input type="text" onChange={this.setDataNascimento.bind(this)} />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Celular</label>
            			<input type="text" onChange={this.setCelular.bind(this)} />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Email</label>
            			<input type="text" onChange={this.setEmail.bind(this)} />            
        			</div>      
        			<label>Idioma</label>
        			<select id="stacked-state">
            			<option>Português</option>
            			<option>Inglês</option>            			
        			</select>  	
        			<div className="pure-control-group">
            			<label>Senha</label>
            			<input type="password" onChange={this.setSenha.bind(this)} />            
        			</div>  
        			<div className="pure-control-group">
            			<label>Confirmar Senha</label>
            			<input type="password" onChange={this.confirmacaoSenha.bind(this)} />            
        			</div>  		          
        			<div className="pure-controls">            
            			<button type="submit" className="pure-button pure-button-primary"
            				onClick={e => {							
							this.salvar(e);
						}}>Salvar</button>
        			</div>
    			</fieldset>
			</form>			
		)
	}	

	salvar(event) {
		event.preventDefault();
		
		if(this.state.validacao.senha !== this.state.usuario.senha){
			alert('Senha confirmada incorretamente.');
			return;
		}

		console.log('usuario salvo...');
		console.log(this.state.usuario);
		
		UsuarioService.salvar(this.state.usuario);
	}

	confirmacaoSenha(event) {
		let usuario = this.state.usuario;
		let confirmacao = event.target.value;		
		this.state.validacao.senha = confirmacao;
	}

	salvarUsuario(usuario) {
		this.setState({
			usuario: usuario,
			validacao : {
				senha : this.state.validacao.senha
			}
		});
	}

	setNome(e) {
		let usuario = this.state.usuario;
		usuario.nome = e.target.value;
		this.salvarUsuario(usuario);
	}

	setDataNascimento(e) {
		let usuario = this.state.usuario;
		usuario.dataNascimento = e.target.value;
		this.salvarUsuario(usuario);		
	}

	setCelular(e) {
		let usuario = this.state.usuario;
		usuario.celular = e.target.value;
		this.salvarUsuario(usuario);			
	}

	setEmail(e) {
		let usuario = this.state.usuario;
		usuario.email = e.target.value;
		this.salvarUsuario(usuario);			
	}

	setIdioma(e) {
		let usuario = this.state.usuario;
		usuario.idioma = e.target.value;
		this.salvarUsuario(usuario);			
	}

	setSenha(e) {
		let usuario = this.state.usuario;
		usuario.senha = e.target.value;
		this.salvarUsuario(usuario);		
	}


}

export default CadastroUsuario;