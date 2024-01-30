import ApiClient from '../apiclient';
import Investimento from '../../model/investimento';



class InvestimentoService {

	static listarPorUsuario(callback) {
		
		const investimentoURL = '/investimentos'

		ApiClient.baseClient()
			.get(investimentoURL)
			.then((response) => {						
				let data = response.data;				
				let investimentos = new Array();
				data.map( (inv) => {
					investimentos.push(new Investimento(inv.id, inv.nome, inv.tipo, inv.natureza))
				})						
				
				callback(investimentos);
			})
			.catch((erro) => {				
				console.log("Erro ao listar investimentos: " + erro);				
			});
	}	

	static salvar(investimento, callback) {

		const investimentoURL = '/investimentos'

		let investimentoDTO = {
			nome: investimento.nome,
			tipo: investimento.tipo
		}

		ApiClient.baseClient()
			.post(investimentoURL, investimentoDTO)
			.then((response) => {
				callback()
				console.log("Investimento salvo ");
			})
			.catch((erro) => {				
				console.log("Erro ao salvar investimento: " + erro);				
			})
		
	}
	
	static remover(id, callback) {

		const investimentoURL = '/investimentos/' + id

		ApiClient.baseClient()
			.delete(investimentoURL)
			.then((response) => {
				callback()
				console.log("Investimento removido ");
			})
			.catch((erro) => {				
				console.log("Erro ao remover investimento: " + erro);				
			})
	}

	

}
export default InvestimentoService;