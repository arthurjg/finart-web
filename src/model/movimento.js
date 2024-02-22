import DateUtils from './../service/dateUtils'

class Movimento {
	
	constructor(id, tipo, data, valor) {
		this.id = id;
		this.tipo = tipo;				
		this.data = DateUtils.convertDate(data);	
		this.valor = valor;			
	}

}
export default Movimento;