import React from "react";

class Nome extends React.Component {
  render() {
    const { nome, handleState } = this.props
    return (
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          maxLength={40}
          required
          value={nome}
          onChange={handleState}
        />
      </label>
    )
  }
}

export default Nome;