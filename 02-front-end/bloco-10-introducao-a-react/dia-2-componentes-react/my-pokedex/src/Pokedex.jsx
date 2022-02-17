import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

// ========== primeira maneira =========== 

// class Pokedex extends React.Component {
//   render() {
//     return (
//       pokemons.map((pokemon) =>  <Pokemon 
//       name = {pokemon.name}
//       type = {pokemon.type}
//       value = {pokemon.averageWeight.value}
//       measurementUnit = {pokemon.averageWeight.measurementUnit}
//       source = {pokemon.image}
//       />)
//     )
//   }
// }

// export default Pokedex;

//=========== segunda maneira =================

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokemon) =>  <Pokemon key={pokemon.id} pokemon = {pokemon}/>)
    )
  }
}

export default Pokedex;
