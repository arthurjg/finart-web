import axios from 'axios';

import SessionService from '../service/sistema/sessionService';

class ApiClient {

	static baseClient() {
		var url = 'http://localhost:8080';

		var baseApi = axios.create({baseURL : url});

		baseApi.interceptors.request.use(
			config => {

				let sucessoCallback = (usuario) => {
					config.headers['Authorization'] = 'Bearer ' + usuario.token;
				}

				var erroCallback = () => {} 

				SessionService.obterUsuario(sucessoCallback, erroCallback)

				return config;
			},
			error => Promise.reject(error)
		)

		return baseApi;
	}

}

export default ApiClient;