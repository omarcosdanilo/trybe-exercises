import React from "react";
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Moradia from './Moradia';


class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
    }

    this.handleState = this.handleState.bind(this);
  }
  
  handleState({ target }) {
    // console.log(target.checked)
    const { name } = target;
    const value = target.type === 'radio'? target.id : target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, moradia } = this.state;
    const noCaracterAddress = endereco.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
     // Código para remover caracteres especiais retirado do site: https://metring.com.br/javascript-substituir-caracteres-especiais
    return (
    <>
      <Nome nome={ nome.toUpperCase() } handleState={ this.handleState }/>
      <Email email={ email } handleState={ this.handleState }/>
      <Cpf cpf={ cpf } handleState={ this.handleState }/>
      <Endereco endereco={ noCaracterAddress } handleState={ this.handleState }/>
      <Cidade cidade={ cidade } handleState={ this.handleState }/>
      <Estado estado={ estado } handleState={ this.handleState }/>
      <Moradia moradia={moradia} handleState={ this.handleState }/>
    </>
    )
  }
}

export default Form;