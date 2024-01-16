import { React, useState, useEffect } from 'react';

import BasicTable from '../../../components/basic-table';

import InternoLayout from '../../../components/layouts/interno';
import InvestimentoService from '../../../service/investimentos/investimentoService';

export default function CadastroInvestimentos() {

	let [columns, setColumns] = useState(['nome', 'tipo', 'natureza']);
	let [rows, setRows] = useState([]); 

	useEffect(() => {
		InvestimentoService.listarPorUsuario((investimentos) => {
			setRows(investimentos)			
		});
	}, [])	

	return (
    		<InternoLayout>
    			<h3> Seus Investimentos </h3>
    			<hr/>
    			<BasicTable headers={columns} rows={rows} />
    		</InternoLayout>
  	)

		/*if(rows && rows.lenght > 0) {
  			return (
    			<InternoLayout>
      				<BasicTable headers={columns} rows={rows} />
    			</InternoLayout>
  			)
		} else {
 			return (
 				<InternoLayout>
    				<h3> Você ainda não tem investimentos, tá esperando o que pra começar? </h3>
    			</InternoLayout>      
  			)
		}*/
	
}