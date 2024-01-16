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
				let token = response.data.access_token;

				let data = jwtDecode(token);				
				let usuario = new Usuario(data.nome, data.email, token);			
				callback(usuario);
				console.log("login efetuado com sucesso, usuario: " + usuario.nome);				
			})
			.catch((erro) => {				
				alert("Usuario ou senha incorretos. Nem me pergunte qual deles.");
				console.log(erro);
			});
	}	

}
export default LoginService;