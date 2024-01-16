export default function BarraMenu(props) {	

	function exibeOpcoes(){
        if(props.comOpcoes){
            return (
                <ul className="pure-menu-list">
                <li className="pure-menu-item pure-menu-selected">
                    <a href="/pricipal" className="pure-menu-link">Inicio</a>
                </li>
                <li className="pure-menu-item">
                    <a href="/investimentos" className="pure-menu-link">Investimentos</a>
                </li>
                <li className="pure-menu-item pure-menu-disabled">
                    <a href="#" className="pure-menu-link">Area do Usuario</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Sair</a>
                </li>
                </ul>
            )
                
        } else {
            return null;
        }        
    }    

    return (
		<div className="pure-menu pure-menu-horizontal">
            {exibeOpcoes()}
        </div>    
	)
	
}