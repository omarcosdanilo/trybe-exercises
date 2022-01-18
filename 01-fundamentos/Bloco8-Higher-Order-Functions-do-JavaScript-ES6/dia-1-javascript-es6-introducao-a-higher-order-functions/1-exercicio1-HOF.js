const newEmployees = (newPerson) => {
  const employees = {
    id1: newPerson('Pedro Guerra'),
    id2: newPerson('Luiza Drumond'),
    id3: newPerson('Carla Paiva'),
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

console.log(newEmployees(newPerson));
