const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cepRoutes = Router();

cepRoutes.get('/:cep', cepController.get)

module.exports = cepRoutes;