import React from "react";
import PropTypes from 'prop-types';

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
      pokemon: {
        name,
        type,
        averageWeight:{value: peso},
        averageWeight:{measurementUnit: unidade},
        image
      }
    } = this.props
    
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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    peso: PropTypes.number,
    unidade: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon;