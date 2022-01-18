const newEmployees = () => {
  const employees = {
    id1: newPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newPerson = (nomeCompleto) => {
  const person = {
    nomeCompleto: nomeCompleto,
    email: nomeCompleto.replace(/ /g, '_').toLowerCase() + '@trybe.com.br',
  }
  return person;
};

console.log(newEmployees());
