const { expect } = require('chai');
const verifyNumber = require('../verifyNumber');

describe('Verifica o retorno da funcão verifyNumber', () => {
  it('Se o número passado for maior que 0 deve retornar "positivo"', () => {
    const result = verifyNumber(10);
    expect(result).to.be.equals('positivo')
  })

  it('Se o número passado for menor que 0 deve retornar "negativo"', () => {
    const result = verifyNumber(-1);
    expect(result).to.be.equals('negativo')
  })
  it('Se o número passado for igual a 0 deve retornar "neutro"', () => {
    const result = verifyNumber(0);
    expect(result).to.be.equals('neutro')
  })
  it('Se o valor passado não for do tipo number"', () => {
    const result = verifyNumber('a');
    expect(result).to.be.equals('o valor deve ser um número');
  })
})