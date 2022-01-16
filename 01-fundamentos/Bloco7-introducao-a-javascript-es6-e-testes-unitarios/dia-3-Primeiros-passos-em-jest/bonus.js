// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const indice0 = professionalBoard[0];
const indice1 = professionalBoard[1];
const indice2 = professionalBoard[2];
const indice3 = professionalBoard[3];
const indice4 = professionalBoard[4];
const indice5 = professionalBoard[5];

const verificaId = (id) => {
  if (id === '8579-6'){
    return indice0;
  }
  else if (id === '5569-4') {
    return indice1;
  }
  else if (id === '4456-4') {
    return indice2;
  }
  else if (id === '1256-4') {
    return indice3;
  }
  else if (id === '9852-2-2') {
    return indice4;
  }
  else if (id === '4678-2') {
    return indice5;
  }
};


const buscaProfessional = (id, info) => {
    if (verificaId(id) === undefined){
      throw new Error("ID não identificada")
    }else if (info !== 'firstName' && info !== 'lastName' && info !== 'specialities') {
      throw new Error("Informação indisponível")
    }else {
      return `id: ${verificaId(id).id}, ${info}: ${verificaId(id)[info]}`;
    }
};
console.log(buscaProfessional('1256-4', 'specialities'));

module.exports = buscaProfessional;