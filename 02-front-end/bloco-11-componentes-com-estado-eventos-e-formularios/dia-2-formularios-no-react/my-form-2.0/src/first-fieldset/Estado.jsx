import React from "react";
import states from "../data/states";
import RenderState from "./RenderState";

class Estado extends React.Component {
  render() {
    const { estado, handleState } = this.props;
    return (
      <label>
        Estado:
        <select
        name="estado"
        required
        value={estado}
        onChange={ handleState }
        >
          <RenderState states={states}/>
        </select>
      </label>
    )
  }
}

export default Estado;