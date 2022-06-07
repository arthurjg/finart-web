import React from 'react';
import Login from './components/sistema/login';
import Usuario from './model/usuario';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    Usuario.obter(usuario => {
      this.state = {
        usuario: usuario
      };
    },() => {
      this.state = {
        usuario: undefined
      };
    });   
  }

  render() {
    return (
      <div>
        {this.renderizarLogin()}              
      </div>
    );
  }

  renderizarLogin() {
    let usuario = this.state.usuario;
    if (usuario) {
      return (
        <p> `Seja bem-vindo ${usuario.nome}!`</p>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

export default App;
