class Repository {
	
	constructor() {		
	}

	salvar(item, json,callback) {
		let data = JSON.stringify(json);
		window.localStorage.setItem(item, data);
		callback();
	}

	obter(item, sucesso, falha) {
		let data = window.localStorage.getItem(item);
		let json = JSON.parse(data);
		if (json)
			sucesso(json);
		else
			falha();
	}

}
export default Repository;