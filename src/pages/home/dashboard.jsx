import React from 'react';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			login: null,
			senha: null			
		}
	}

	render() {
		return (
			<div className="center">	
				<p> `Seja bem-vindo usario`</p>				
			</div>
		);
	}
}
export default Dashboard;