// Exercício 1: 🚀 Faça o teste de unidade do método create referente a classe lens.

import { expect } from "chai";
import { Model, mongo } from "mongoose"
import mongoose from 'mongoose';
import Sinon from "sinon"
import Lens from "../../../models/Lens";
import { arrayOfLensMock, lenMock, lenMockWithId } from "../../mocks/lensMock";
import Errors from "../../../errors";


describe('Lens model', () => {
  const lensModel = new Lens();

  describe('Create a len' , () => {
    beforeEach(() => {
      Sinon.stub(Model, 'create').resolves(lenMockWithId)
    });
  
    afterEach(() => {
      Sinon.restore();
    });

    it('successfully created', async () => {
      const createdLen = await lensModel.create(lenMock);
  
      expect(createdLen).to.be.deep.equal(lenMockWithId)
    });
  });

  describe('Searching a len', () => {
    afterEach(() => {
      Sinon.restore();
    });

    it('Should throw an InvalidMongoId error if an invalid id is passed', async () => {
      let err: any;

      Sinon.stub(mongoose, 'isValidObjectId').returns(false);

      try {
        await lensModel.readOne('id inválido');
      } catch (catchedError) {
        err = catchedError;
      };

      expect(err.message).to.be.equal(Errors.InvalidMongoId)
    });

    it('Should return a len if a valid id is passed', async () => {
      Sinon.stub(mongoose, 'isValidObjectId').returns(true);
      Sinon.stub(Model, 'findOne').resolves(lenMockWithId);

      const foundedLen = await lensModel.readOne(lenMockWithId._id);

      expect(foundedLen).to.be.deep.equal(lenMockWithId);
    });
  });

  describe('Searching all lens', () => {
    afterEach(() => {
      Sinon.restore();
    });

		it('should return an array of lens', async () => {
			Sinon.stub(Model, 'find').resolves(arrayOfLensMock);

			const lens = await lensModel.read();
	
			expect(lens).to.be.deep.equal(arrayOfLensMock);
		});
	});
})