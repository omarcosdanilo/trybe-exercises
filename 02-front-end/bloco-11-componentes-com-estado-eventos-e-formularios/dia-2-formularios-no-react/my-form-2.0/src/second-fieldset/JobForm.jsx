import React from "react";
import Cargo from "./Cargo";
import ResumoCurriculo from "./ResumoCurriculo"
import DescricaoCargo from "./DescricaoCargo";

class JobForm extends React.Component{
  constructor() {
    super()

    this.state = {
      resumo: '',
      cargo: '',
      descricao: '',
    }

    this.handleJobFormState = this.handleJobFormState.bind(this);
  }

  handleJobFormState({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { resumo, cargo, descricao } = this.state;
    return (
      <>
      <ResumoCurriculo resumo={ resumo } handleJobFormState={ this.handleJobFormState } />
      <Cargo cargo={cargo} handleJobFormState={this.handleJobFormState} />
      <DescricaoCargo descricao={descricao} handleJobFormState={this.handleJobFormState} />
      </>
    )
  }
}

export default JobForm;