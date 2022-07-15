import jwtDecode from 'jwt-decode';
import ApiClient from '../apiclient';
import Usuario from '../../model/usuario';

class LoginService {	

	static login(usuario, senha, callback) {
		var param = {
			email : usuario,
			senha : senha
		};
		
		ApiClient.baseClient()
			.post('/autenticacao', param)
			.then((response) => {						
				let data = jwtDecode(response.data.access_token);				
				let usuario = new Usuario(data.nome, data.email);			
				callback(usuario);
			})
			.catch((erro) => {				
				alert("Usuario ou senha incorretos. Nem me pergunte qual deles.");
			});
	}	

}
export default LoginService;