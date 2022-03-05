import React from "react";

class Cargo extends React.Component {
  constructor() {
    super()

    this.state = {
      show: 0,
    }

    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    alert('Preencha o cargo com atenção!!!')
    this.setState((prevState) => ({
      show: prevState.show + 1
    }))

  }

  render() {
    const {cargo, handleJobFormState } = this.props
    const { show } = this.state;
    const alert = show === 0? this.showAlert : null;

    return (
      <label>
        Cargo:
        <textarea
        className="cargo"
        maxLength={40}
        name="cargo"
        value={ cargo }
        onChange={ handleJobFormState }
        onMouseEnter={ alert }
         />
      </label>
    )
  }
}

export default Cargo;