import React from "react";

class Email extends React.Component {
  render() {
    const { email, handleState } = this.props
    return (
      <label>
        Email:
        <input
          type="text"
          name="email"
          maxLength={50}
          required
          value={ email }
          onChange={ handleState }
         />
      </label>
    )
  }
}

export default Email;