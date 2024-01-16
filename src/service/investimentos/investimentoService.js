import ApiClient from '../apiclient';
import Investimento from '../../model/investimento';

class InvestimentoService {	

	static listarPorUsuario(callback) {
		
		
		ApiClient.baseClient()
			.get('/investimentos')
			.then((response) => {						
				let data = response.data;				
				let investimentos = new Array();
				data.map( (inv) => {
					investimentos.push(new Investimento(inv.nome, inv.tipo, inv.natureza))
				})						
				
				callback(investimentos);
			})
			.catch((erro) => {				
				console.log("Erro ao listar investimentos: " + erro);				
			});
	}		

}
export default InvestimentoService;