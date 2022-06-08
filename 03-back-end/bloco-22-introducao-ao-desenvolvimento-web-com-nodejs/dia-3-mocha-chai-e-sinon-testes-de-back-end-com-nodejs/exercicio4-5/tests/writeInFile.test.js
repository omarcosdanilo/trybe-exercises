const sinon = require('sinon');
const fs = require('fs');
const { expect } = require('chai');
const writeInFile = require('../writeInFile');

const CONTEUDO_DO_ARQUIVO = 'TDD é top';

describe('Verifica a função writeFile', () => {
  beforeEach(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  afterEach(() => {
    fs.writeFileSync.restore();
  })
  describe('Caso o nome do arquivo e o conteudo sejam passados', () => {  
    it('Deve retornar "ok"', () => {
      const retorno = writeInFile('arquivo.txt', 'TDD é top');
      expect(retorno).to.be.equals('ok');
    })
  })

  describe('Caso o nome do arquivo ou o conteúdo não seja passado', () => {
    it('Deve retornar "Deu ruim"', () => {
      const retorno = writeInFile();
      expect(retorno).to.be.equals('Deu ruim');
    })
  })
})