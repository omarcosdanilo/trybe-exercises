import React from "react";

class Cpf extends React.Component {
  render() {
    const { cpf, handleState } = this.props
    return (
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          maxLength={11}
          required
          value={cpf}
          onChange={handleState}
          placeholder="Digite somente os números"
         />
      </label>
    )
  }
}

export default Cpf;