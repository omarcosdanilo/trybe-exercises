const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Faz a busca por um filme no banco de dados através do ID do filme', () => {

  // before(async () => {
  //   const id = 1;
  //   sinon.stub(connection, 'execute').resolves(1);
  // })

  // after( async () => {
  //   connection.execute.restore();
  // })
    
  describe('Quando é encontrado um filme com o ID passado', async () => {

  })

  describe('Quando não é encontrado um filme com o ID passado', () => {
    it.only('Retorna false', async () => {
      // const data = await ;
      expect(await MoviesModel.getById(1)).to.be.equal(false);
    })
  })
})