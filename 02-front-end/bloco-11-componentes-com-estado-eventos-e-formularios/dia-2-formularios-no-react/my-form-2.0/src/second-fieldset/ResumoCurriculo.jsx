import React from "react";

class ResumoCurriculo extends React.Component {
  render() {
    const { resumo, handleJobFormState } = this.props;
    return (
      <label>
        Resumo do currículo:
        <textarea 
        className="resumo-curriculo"
        maxLength={1000}
        required
        resize="none"
        name="resumo"
        value={ resumo }
        onChange={ handleJobFormState }
        />
      </label>
    )
  }
}

export default ResumoCurriculo;