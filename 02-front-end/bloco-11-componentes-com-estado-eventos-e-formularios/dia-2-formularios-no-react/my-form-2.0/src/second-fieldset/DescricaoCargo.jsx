import React from "react";

class DescricaoCargo extends React.Component {
  render() {
    const { descricao, handleJobFormState } = this.props;
    return (
      <label>
        Descrição do cargo:
        <textarea 
        maxLength={500}
        required
        name="descricao"
        value={ descricao }
        onChange={ handleJobFormState }
        />
      </label>
    )
  }
}

export default DescricaoCargo;