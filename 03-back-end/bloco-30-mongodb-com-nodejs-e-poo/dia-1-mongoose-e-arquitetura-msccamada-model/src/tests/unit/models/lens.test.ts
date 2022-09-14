// Exercício 1: 🚀 Faça o teste de unidade do método create referente a classe lens.

import { expect } from "chai";
import { Model } from "mongoose"
import Sinon from "sinon"
import Lens from "../../../models/Lens";
import { lenMock, lenMockWithId } from "../../mocks/lensMock";


describe.only('Create lens', () => {
  const lens = new Lens();

  beforeEach(() => {
    Sinon.stub(Model, 'create').resolves(lenMockWithId)
  });

  afterEach(() => {
    Sinon.restore();
  })

  it('successfully created', async () => {
    const createdLen = await lens.create(lenMock);
    
    expect(createdLen).to.be.deep.equal(lenMockWithId)
  })
})