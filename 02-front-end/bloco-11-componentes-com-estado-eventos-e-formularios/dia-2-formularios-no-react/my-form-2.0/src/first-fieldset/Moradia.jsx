import React from "react";

class Moradia extends React.Component {
  render() {
    const { moradia, handleState } = this.props;
    return(
      <>
      <label htmlFor="moradia">
        <input
        id="Casa"
        type="radio"
        name="moradia"
        value={ moradia }
        onChange={handleState}
        />
        Casa
      </label>

      <label htmlFor="moradia">
        <input
        id="Apartamento"
        type="radio"
        name="moradia"
        value={moradia}
        onChange={handleState}
        />
        Apartamento
      </label>
      </>
    )
  }
}


export default Moradia;