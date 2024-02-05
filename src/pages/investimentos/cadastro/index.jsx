import { React, useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import BasicTable from '../../../components/basic-table';
import Formulario from '../../../components/formulario';

import InternoLayout from '../../../components/layouts/interno';
import Toast, { renderSuccessToast } from '../../../components/Toast';
import InvestimentoService from '../../../service/investimentos/investimentoService';
import InvestimentoTipoService from '../../../service/investimentos/investimentoTipoService';
import Investimento from '../../../model/investimento';

export default function CadastroInvestimentos() {

	let [columns, setColumns] = useState(['nome', 'tipo', 'natureza']);
	let [rows, setRows] = useState([]);
	let [tipos, setTipos] = useState([]);  

	let [novoId, setNovoId] = useState();
	let [novoNome, setNovoNome] = useState('');
	let [novoTipo, setNovoTipo] = useState('TD'); 

	const acoes = [{
		label: 'Remover',
		action: removerHandler
	},
	{
		label: 'Editar',
		action: editarHandler
	}]

	useEffect(() => {
		listar()
		InvestimentoTipoService.listar((tipos) => {			
			setTipos(tipos)	
			tipos.forEach( tipo => {
				console.log('tipo: ' + tipo.nome + ', ' + tipo.tipo)	
			});
				
		})		
	}, [])	

	function listar() {
		InvestimentoService.listarPorUsuario((investimentos) => {
			setRows(investimentos)			
		})
	}

	function reinicializarForm(event) {
		listar()
		setNovoId(null)
		setNovoNome('')
		setNovoTipo('TD')
	}

	function sucessoSalvar(event) {		
		renderSuccessToast('Investimento criado com sucesso!')
		reinicializarForm()
	}

	function sucessoAtualizar(event) {		
		renderSuccessToast('Investimento atualizado com sucesso!')
		reinicializarForm()
	}
	
	function sucessoRemover(event) {		
		renderSuccessToast('Investimento removido com sucesso.')
		reinicializarForm()
	}

	function salvar(event) {
		event.preventDefault();		
		
		if(!novoId){
			InvestimentoService.salvar(new Investimento(null, novoNome, novoTipo, null), sucessoSalvar)
		} else {
			InvestimentoService.atualizar(new Investimento(novoId, novoNome, novoTipo, null), sucessoAtualizar)
		}
				
	}

	function removerHandler(investimento) {
		InvestimentoService.remover(investimento.id, sucessoRemover)
	}

	function editarHandler(investimento) {		

		let tipoAchados = tipos.filter((tipo) => investimento.tipo == tipo.nome)
		let tipoAchado = tipoAchados[0]		
		const tipoId = tipoAchado.tipo		

		setNovoId(investimento.id)
		setNovoNome(investimento.nome)
		setNovoTipo(tipoId)
	}

	function setNovoNomeHandler(e) {		
		setNovoNome(e.target.value)
	}

	function setNovoTipoHandler(e) {		
		setNovoTipo(e.target.value)
	}

	return (
    		<InternoLayout>
    			<h3> Seus Investimentos </h3>
    			<hr/>
				<form className="pure-form pure-form-aligned">
					<fieldset>
        				<div className="pure-control-group">
            				<label>Nome</label>
            				<input type="text" value={novoNome} onChange={(event) => setNovoNomeHandler(event)} />            
        				</div>
						<div className="pure-control-group">
							<label>Tipo</label>
        					<select id="stacked-state" value={novoTipo} onChange={(event) => setNovoTipoHandler(event)}>
								{tipos.map((tipo) => {
									return (<option key={tipo.tipo} value={tipo.tipo}>{tipo.nome}</option>)
								})}           					          			
        					</select>
						</div>
						<div className="pure-controls">            
            				<button type="submit" className="pure-button pure-button-primary"
            					onClick={e => {	salvar(e);	}}>Salvar</button>
        				</div>
    				</fieldset>
				</form>				
				<hr/>				
    			<BasicTable headers={columns} rows={rows} acoes={acoes} />
				<Toast />
    		</InternoLayout>
  	)		
	
}