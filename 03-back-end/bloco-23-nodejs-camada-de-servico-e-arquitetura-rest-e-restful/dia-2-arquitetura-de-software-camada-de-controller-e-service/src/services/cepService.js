const cepModel = require('../models/cepModels');
const Joi = require('joi');

const { throwNotFoundCep } = require('./utils');

const cepService = {

  async validateCep(unknown) {
    const schema = Joi.object({
      cep: Joi.string().pattern(new RegExp(/\d{5}-?\d{3}/)),
    })
    const result =  await schema.validateAsync(unknown);
    
    // if(!result) throwInvalidCepError('CEP inválido');
    return result;
  },

  async exists(cep) {
      const exists = await cepModel.exists(cep);
  
      if(!exists) throwNotFoundCep('CEP não encontrado');
  },

  formartCep(address) {
    const fPart = address.cep.split("").slice(0,5);
    const lPart = address.cep.split("").slice(5,9);

    return `${fPart.join("")}-${lPart.join("")}`;
  },

  async get(cep) {
    const address = await cepModel.get(cep);

    const originalCep = this.formartCep(address);

    address.cep = originalCep;

    return address;
  }

}

module.exports = cepService;