import { React, useState, useEffect } from 'react';

import CollapsibleTable from '../../../components/collapsible-table';

import InternoLayout from '../../../components/layouts/interno';
import Toast, { renderSuccessToast } from '../../../components/Toast';
import InvestimentoService from '../../../service/investimentos/investimentoService';
import InvestimentoTipoService from '../../../service/investimentos/investimentoTipoService';
import Investimento from '../../../model/investimento';
import MovimentosService from '../../../service/investimentos/movimentosService';

export default function CadastroInvestimentos() {

	const columns = ['nome', 'tipo', 'natureza'];
	const movimentoColumns = ['data', 'tipo', 'valor'];
	
	let [rows, setRows] = useState([]);
	let [tipos, setTipos] = useState([]);  

	let [novoId, setNovoId] = useState();
	let [novoNome, setNovoNome] = useState('');
	let [novoTipo, setNovoTipo] = useState('TD'); 
	let [editandoInvestimento, setEditandoInvestimento] = useState(false);
	let [editandoMovimentacao, setEditandoMovimentacao] = useState(false);
	let [movimentacaoData, setMovimentacaoData] = useState(new Date());
	let [movimentacaoTipo, setMovimentacaoTipo] = useState('C');
	let [movimentacaoValor, setMovimentacaoValor] = useState();

	const acoes = [{
		label: 'Remover',
		action: removerHandler
	},
	{
		label: 'Editar',
		action: editarHandler
	}]

	const tiposMovimentacao = [
		{
			value: 'C',
			name: 'Compra'
		},
		{
			value: 'V',
			name: 'Venda'
		}
	]

	const subtitulo = 'Movimentações'
	const novaMovimentacaoLabel = 'Nova'

	useEffect(() => {
		listar()
		InvestimentoTipoService.listar((tipos) => {			
			setTipos(tipos)				
		})		
	}, [])	

	function listar() {
		InvestimentoService.listarPorUsuario((investimentos) => {
			setRows(investimentos)			
		})
	}

	function reinicializarForm() {
		listar()
		setNovoId(null)
		setNovoNome('')
		setNovoTipo('TD')
		setEditandoInvestimento(false)
	}

	function reinicializarFormMovimento() {
		setMovimentacaoData(new Date())
		setMovimentacaoTipo('C')
		setMovimentacaoValor()
		setEditandoMovimentacao(false)
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

		let tipoAchados = tipos.filter((tipo) => investimento.tipo === tipo.nome)
		let tipoAchado = tipoAchados[0]		
		const tipoId = tipoAchado.tipo		

		setEditandoInvestimento(true)
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

	function listarPorInvestimento(id, callback) {
		MovimentosService.listarPorInvestimento(id, callback)
	}

	function adicionarMovimentacaoHandler(investimentoID) {		
		setNovoId(investimentoID)
		setEditandoMovimentacao(true)
	}

	function salvarMovimentacao(event){
		event.preventDefault();		
		
		MovimentosService.salvar(novoId, 
			movimentacaoTipo, movimentacaoData, movimentacaoValor, sucessoSalvarMovimentacao)		
	}

	function sucessoSalvarMovimentacao() {		
		renderSuccessToast('Movimentação criada com sucesso!')
		reinicializarForm()
		reinicializarFormMovimento()
	}

	return (
    		<InternoLayout>
    			<h3> Seus Investimentos </h3>    			
				{ editandoInvestimento ? 
					<>
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
            					onClick={e => {	salvar(e)	}}>Salvar</button>
        				</div>
    				</fieldset>
					</form>
					<hr/>
					</> :
				<button className="pure-button pure-button-primary" onClick={e => { setEditandoInvestimento(true)}}>
					Criar
				</button>	}
				{ editandoMovimentacao && 
					<>
					<hr/>
					<form onSubmit={e => {salvarMovimentacao(e)}} className="pure-form pure-form-aligned">
					<fieldset>
        				<div className="pure-control-group">
            				<label>Data</label>
            				<input type="datetime-local" required={true} value={movimentacaoData} onChange={(e) => setMovimentacaoData(e.target.value)} />            
        				</div>
						<div className="pure-control-group">
							<label>Tipo</label>
        					<select id="stacked-state" required={true} value={movimentacaoTipo} onChange={(e) => setMovimentacaoTipo(e.target.value)}>
								{tiposMovimentacao.map((tipo) => {
									return (<option key={tipo.value} value={tipo.value}>{tipo.name}</option>)
								})}           					          			
        					</select>
						</div>
						<div className="pure-control-group">
            				<label>Valor</label>
            				<input type="number" required={true} value={movimentacaoValor} min="0.01" onChange={(e) => setMovimentacaoValor(e.target.value)} />            
        				</div>
						<div className="pure-controls">            
            				<button type="submit" className="pure-button pure-button-primary">Salvar</button>
        				</div>
    				</fieldset>
					</form>
					<hr/>
					</>
				}			
				   			
				<CollapsibleTable 
					headers={columns} 
					rows={rows} 
					acoes={acoes} 
					subtitulo={subtitulo}
					detailsHeaders={movimentoColumns} 
					getDetailsByRow={listarPorInvestimento}
					addDetailsLabel={novaMovimentacaoLabel}
					addDetailsAction={adicionarMovimentacaoHandler} 
				/>
				<Toast />
    		</InternoLayout>
  	)		
	
}