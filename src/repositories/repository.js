class Repository {	

	salvar(item, json) {
		let data = JSON.stringify(json);
		window.sessionStorage.setItem(item, data);		
	}

	obter(item, sucesso, falha) {
		let data = window.sessionStorage.getItem(item);
		let json = JSON.parse(data);
		if (json)
			sucesso(json);
		else
			falha();
	}

	remover(item) {
		window.sessionStorage.removeItem(item);
	}

}
export default Repository;