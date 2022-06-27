import React from 'react';
import Login from './pages/login';
import SessionService from './service/sistema/sessionService';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    SessionService.obter(usuario => {
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
      {renderizarLogin()}
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
