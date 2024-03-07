import ApiClient from '../apiclient';
import Movimento from '../../model/movimento';


class MovimentosService {

	static listarPorInvestimento(id, callback) {
		
		const movimentosURL = `/investimentos/${id}/movimentos`

		ApiClient.baseClient()
			.get(movimentosURL)
			.then((response) => {						
				let data = response.data;				
				let movimentos = [];
				data.forEach( (mov) => {
					movimentos.push(new Movimento(mov.id, mov.tipo, mov.data, mov.valor))
				})						
				
				callback(movimentos);
			})
			.catch((erro) => {				
				console.log("Erro ao listar movimentos: " + erro);				
			});
	}	

	static salvar(idInvestimento, tipo, data, valor, callback) {

		const movimentosURL = `/investimentos/${idInvestimento}/movimentos`		

		let movimentacaoDTO = {
			data: data,
			tipo: tipo,
			valor: valor
		}		

		ApiClient.baseClient()
			.post(movimentosURL, movimentacaoDTO)
			.then((response) => {
				callback()				
				console.log("Movimentação salva ");
			})
			.catch((erro) => {		
						
				console.log("Erro ao salvar Movimentação: " + erro);				
			})		
	}

	/*static atualizar(investimento, callback) {

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