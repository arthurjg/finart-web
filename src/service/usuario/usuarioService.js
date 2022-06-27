import ApiClient from '../apiclient';

class UsuarioService {	

	static salvar(usuario) {
		ApiClient.baseClient().post('/usuarios/registro', usuario);
	}	

}
export default UsuarioService;