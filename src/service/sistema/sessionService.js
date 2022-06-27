import Usuario from '../../model/usuario';
import Repository from '../../repositories/repository';
const repository = new Repository();

class SessionService {	

	static obter(sucesso,falha) {
		repository.obter('usuario-logado', json => {
			let usuario = new Usuario();
			usuario.nome = json.nome;
			sucesso(usuario);
		}, falha);
	}	

	static salvarUsuario(usuario) {
		repository.salvar('usuario-logado', usuario);
	}	

}
export default SessionService;
