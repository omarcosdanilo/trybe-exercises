// Exercício 1: 🚀 Faça o teste de unidade do método create referente a classe lens.

import { expect } from "chai";
import { Model, mongo } from "mongoose"
import mongoose from 'mongoose';
import Sinon from "sinon"
import Lens from "../../../models/Lens";
import { lenMock, lenMockWithId } from "../../mocks/lensMock";
import Errors from "../../../errors";


describe('Lens model', () => {
  const lens = new Lens();

  describe('Create a len' , () => {
    beforeEach(() => {
      Sinon.stub(Model, 'create').resolves(lenMockWithId)
    });
  
    afterEach(() => {
      Sinon.restore();
    });

    it('successfully created', async () => {
      const createdLen = await lens.create(lenMock);
  
      expect(createdLen).to.be.deep.equal(lenMockWithId)
    });
  });

  describe.only('Searching a len', () => {
    afterEach(() => {
      Sinon.restore();
    });

    it('Should throw an InvalidMongoId error if an invalid id is passed', async () => {
      let err: any;

      Sinon.stub(mongoose, 'isValidObjectId').returns(false);

      try {
        await lens.readOne('id inválido');
      } catch (catchedError) {
        err = catchedError;
      };

      expect(err.message).to.be.equal(Errors.InvalidMongoId)
    });

    it('Should return a len if a valid id is passed', async () => {
      Sinon.stub(mongoose, 'isValidObjectId').returns(true);
      Sinon.stub(Model, 'findOne').resolves(lenMockWithId);

      const foundedLen = await lens.readOne(lenMockWithId._id);

      expect(foundedLen).to.be.deep.equal(lenMockWithId);
    });
  });
})