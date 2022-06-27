const cepService = require('../services/cepService');

const cepController = {

  async get(req, res) {
    const { cep } =  await cepService.validateCep(req.params);
    
    await cepService.exists(cep);

    const item = await cepService.get(cep);

    return res.status(200).json(item);
  }

};

module.exports = cepController;