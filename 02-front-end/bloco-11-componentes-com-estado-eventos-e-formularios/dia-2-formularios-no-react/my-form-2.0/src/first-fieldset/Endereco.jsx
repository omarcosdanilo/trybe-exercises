import React from "react";

class Endereco extends React.Component {
  render() {
    const { endereco, handleState } = this.props
    return (
      <label>
        Endereço:
        <input
        type="text"
        name="endereco"
        maxLength={200}
        value={endereco}
        required 
        onChange={handleState}
        />
      </label>
    )
  }
}

export default Endereco;