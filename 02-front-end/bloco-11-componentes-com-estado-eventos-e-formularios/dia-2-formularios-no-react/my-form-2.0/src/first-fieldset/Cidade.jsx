import React from "react";

class Cidade extends React.Component {
  render() {
    const { cidade, handleState } = this.props;
    return (
      <label>
        Cidade:
        <input
          type="text"
          name="cidade"
          maxLength={28}
          value={ cidade }
          onChange={handleState}
        />
      </label>
    )
  }
}

export default Cidade;