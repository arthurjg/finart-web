import axios from 'axios';

class ApiClient {

	static baseClient() {
		var url = 'http://localhost:8080';
		return axios.create({baseURL : url});
	}

}

export default ApiClient;