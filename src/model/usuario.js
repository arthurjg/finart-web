import Repository from '../components/sistema/Repository';
const repository = new Repository();

class Usuario {


	
	constructor() {
		this.nome = ''			
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