// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require('@jest/globals');
const { getPokemonDetails } = require('./exercicio8');

const error = new Error('Não temos esse pokémon para você :(');
const message = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf'

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    function callback(erro, succesMessage) {
      expect(erro).toEqual(error);
      done()
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Marcos', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    function callback(erro, succesMessage) {
      expect(succesMessage).toBe(message);
      done()
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });

});