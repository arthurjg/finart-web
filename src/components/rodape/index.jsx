export default function Rodape(props) {
	
	function renderizarUsuario() {
		if(props.usuario != null){
			return <div>
				Usuario Logado: {props.usuario.nome}
			</div>
		} else {
			return null;
		}		
	}

	return (
		<div>Finart. 
			Seu gerenciador Financeiro <br />
			{renderizarUsuario()}
		</div>
	)
}