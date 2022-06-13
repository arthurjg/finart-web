import Repository from '../components/sistema/repository';
const repository = new Repository();

class Usuario {
	
	constructor() {
		this.nome = null;
		this.dataNascimento = null;
		this.celular = null;
		this.email = null;
		this.idioma = null;
		this.senha = null;
	}	

	static obter(sucesso,falha) {
		repository.obter('usuario-logado', json => {
			let usuario = new Usuario();
			usuario.nome = json.nome;
			sucesso(usuario);
		}, falha);
	}		

}
export default Usuario;