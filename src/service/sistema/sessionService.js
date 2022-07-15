import Usuario from '../../model/usuario';
import Repository from '../../repositories/repository';
const repository = new Repository();

class SessionService {	

	static obter(sucesso, falha) {
		repository.obter('usuario-logado', json => {
			const now = new Date();
			const thirdyMinutesAgo = now.getMilliseconds() - (1000 * 60 * 30);
			const horaAcessoSessao = new Date(json.horaAcesso);
			if(horaAcessoSessao.getMilliseconds() > thirdyMinutesAgo){
				let usuario = new Usuario();
				usuario.nome = json.nome;
				sucesso(usuario);
			} else {
				repository.removeItem(json);
				falha();
			}
			
		}, falha);
	}	

	static salvarUsuario(usuario) {
		usuario.horaAcesso = new Date();
		repository.salvar('usuario-logado', usuario);
	}	

}
export default SessionService;
