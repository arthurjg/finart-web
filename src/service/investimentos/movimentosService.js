import ApiClient from '../apiclient';
import Movimento from '../../model/movimento';


class MovimentosService {

	static listarPorInvestimento(id, callback) {
		
		const movimentosURL = `/investimentos/${id}/movimentos`

		ApiClient.baseClient()
			.get(movimentosURL)
			.then((response) => {						
				let data = response.data;				
				let movimentos = new Array();
				data.map( (mov) => {
					movimentos.push(new Movimento(mov.id, mov.tipo, mov.data, mov.valor))
				})						
				
				callback(movimentos);
			})
			.catch((erro) => {				
				console.log("Erro ao listar movimentos: " + erro);				
			});
	}	

	/*static salvar(investimento, callback) {

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

	static atualizar(investimento, callback) {

		const investimentoURL = '/investimentos/' + investimento.id

		let investimentoDTO = {
			nome: investimento.nome,
			tipo: investimento.tipo
		}

		ApiClient.baseClient()
			.put(investimentoURL, investimentoDTO)
			.then((response) => {
				callback()
				console.log("Investimento atualizado ");
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
	}*/

	

}
export default MovimentosService;