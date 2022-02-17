import React from "react";

// ========== primeira maneira =========== 
// class Pokemon extends React.Component {
//   render() {
//     const {name, type, value, measurementUnit, source} = this.props
//     return (
//       <div>
//         <p>{name}</p>
//         <p>{type}</p>
//         <p>{`${value}: ${measurementUnit}`}</p>
//         <img src = {source} alt="" />
//       </div>
//     )
//   }
// }

// export default Pokemon;

//=========== segunda maneira =================
class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight:{value: peso},
      averageWeight:{measurementUnit: unidade},
      image
    } = this.props.pokemon
    
    return (
      <div className="poke-flex">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight: ${peso}${unidade}`}</p>
        </div>
        <img src = {image} alt={name} />
      </div>
    )
  }
}

export default Pokemon;