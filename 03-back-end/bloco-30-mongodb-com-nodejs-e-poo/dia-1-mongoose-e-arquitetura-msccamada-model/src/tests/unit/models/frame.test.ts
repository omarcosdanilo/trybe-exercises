import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import mongoose from 'mongoose';
import Errors from '../../../errors';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		
		it('successfully found', async () => {
			sinon.stub(mongoose, 'isValidObjectId').returns(true);

			const framesFound = await frameModel.readOne('qualquer id');
			expect(framesFound).to.be.deep.equal(frameMockWithId);

			sinon.restore();
		});

		it('_id is not valid', async () => {
			sinon.stub(mongoose, 'isValidObjectId').returns(false);

			let err: any;

			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				err = error
			}
			expect(err).not.to.be.undefined;
			expect(err.message).to.be.eq('InvalidMongoId');

			sinon.restore();
		});
	});

	describe('update a frame', () => {

		afterEach(() => {
			sinon.restore();
		})
		
		it('successfully updated', async () => {
			sinon.stub(mongoose, 'isValidObjectId').returns(true);
			sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockWithId)

			const updated = await frameModel.update({
				color: 'outra cor',
			}, 'any id');
			
			expect(updated).to.be.deep.equal(frameMockWithId);
		});

		it('invalid id', async () => {
			let err: any;

			sinon.stub(mongoose, 'isValidObjectId').returns(false);
			sinon.stub(Model, 'findByIdAndUpdate').resolves(null)

			try {
				await frameModel.update({
					color: 'outra cor',
				}, 'any id');
				
			} catch (catchedError) {
				err = catchedError;
			}
			
			expect(err.message).to.be.equal(Errors.InvalidMongoId);
		});

		it('id not found', async () => {
			sinon.stub(mongoose, 'isValidObjectId').returns(true);
			sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

			const updated = await frameModel.update({
				color: 'outra cor',
			}, 'any id');

			expect(updated).to.be.equal(null);
		});
	});
});