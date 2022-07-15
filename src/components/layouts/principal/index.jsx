import { React } from 'react';
import BarraMenu from '../../barra-menu'; 
import Rodape from '../../rodape'; 
import Logo from '../../../imagens/logotipo_g.png';

const PrincipalLayout: React.FC = ({children}) => {	

	
	return (
		<div id="container">
			<div id="titulo">
				Finart
			</div>
       		<div id="logotipo">
       			<img alt="" src={Logo} />
       		</div>
       		<div id="barra_menu">
        		<BarraMenu comOpcoes={false}></BarraMenu>  
    		</div>
    		<div id="corpo">
      			{children}          
    		</div>
    		<div id="rodape">
        		<Rodape></Rodape>
    		</div>
  		</div>
	);
	
}; 
export default PrincipalLayout;
