import ApiClient from '../apiclient';

class UsuarioService {
	
	constructor() {		
	}

	static salvar(usuario) {
		ApiClient.baseClient().post('/usuarios/registro', usuario);
	}	

}
export default UsuarioService;