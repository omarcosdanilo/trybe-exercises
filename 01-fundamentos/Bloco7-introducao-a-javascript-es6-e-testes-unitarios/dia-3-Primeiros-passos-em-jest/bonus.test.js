const buscaProfessional = require('./bonus');

it('Deve existir a função buscaProfessional()', () => {
  expect(typeof buscaProfessional).toBe('function');
});

it('Caso o id não existe, deve retornar o erro "ID não identificada"', () => {
  expect( () => { buscaProfessional('123', 'firstName') }).toThrowError(new Error("ID não identificada"));
});

it('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" ', () => {
  expect( () => { buscaProfessional('8579-6', 'age') }).toThrowError(new Error("Informação indisponível"));
});

it('Chamar a função buscaProfessional("8579-6", "firstName"), deve retornar id: 8579-6, firstName: Ana', () => {
  expect(buscaProfessional('8579-6', 'firstName')).toMatch('id: 8579-6, firstName: Ana');
});

it('Chamar a função buscaProfessional("5569-4", "lastName"), deve retornar id: 5569-4, lastName: Jobs', () => {
  expect(buscaProfessional('5569-4', 'lastName')).toMatch('id: 5569-4, lastName: Jobs');
});

it('Chamar a função buscaProfessional("4456-4", "specialities"), deve retornar id: 4456-4, specialities: Context API, RTL, Bootstrap', () => {
  expect(buscaProfessional('4456-4', 'specialities')).toMatch('id: 4456-4, specialities: Context API,RTL,Bootstrap');
});
