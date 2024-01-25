//import './Formulario.css'
import CampoTexto from './../campoTexto';

const Formulario = (props) => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados do seu Investimento</h2>
                <CampoTexto label="Nome" placeholder="Digite o Nome" />  
                <CampoTexto label="Tipo" placeholder="Digite o tipo" />                
            </form>
        </section>
    )

}

export default Formulario