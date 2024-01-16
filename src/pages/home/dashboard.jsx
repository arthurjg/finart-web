import React from 'react';
import InternoLayout from '../../components/layouts/interno';
import SessionService from '../../service/sistema/sessionService';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		SessionService.obterUsuario((usuario) =>{
			this.state = {
				usuario: usuario,				
			}
		}, (usuario) =>{
			this.state = {
				usuario: null,				
			}
		});
		
	}

	render() {
		return (
			<InternoLayout>
				<div className="center">	
					<p> Seja bem-vindo {this.state.usuario.nome}</p>				
				</div>
			</InternoLayout>
		);
	}
}
export default Dashboard;