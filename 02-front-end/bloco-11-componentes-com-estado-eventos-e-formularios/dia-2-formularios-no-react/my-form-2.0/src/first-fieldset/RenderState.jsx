import React from "react";


class RenderState extends React.Component {
  render() {
    const { states } = this.props
    return(
      states.map((state) => <option key={state.value}>{state.label}</option>)
    )
  }
}

export default RenderState