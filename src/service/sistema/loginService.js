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
				console.log("deu certo!!!");
				console.log(response.data);	
				let data = jwtDecode(response.data.access_token);
				console.log(data);
				let usuario = new Usuario(data.nome, data.email);			
				callback(usuario);
			})
			.catch((erro) => {
				console.log("deu errado!!!");
			});
	}	

}
export default LoginService;