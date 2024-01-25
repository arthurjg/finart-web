import ApiClient from '../apiclient';
import InvestimentoTipo from '../../model/investimentoTipo';

class InvestimentoService {

	static listar(callback) {
		
		const investimentoTiposURL = '/investimentos/tipos'

		ApiClient.baseClient()
			.get(investimentoTiposURL)
			.then((response) => {						
				let data = response.data;				
				let investimentoTipos = new Array();
				data.map( (inv) => {
					investimentoTipos.push(new InvestimentoTipo(inv.nome, inv.tipo))
				})						
				
				callback(investimentoTipos);
			})
			.catch((erro) => {				
				console.log("Erro ao listar tipos de investimentos: " + erro);				
			});
	}	

}
export default InvestimentoService;