const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.getAll);

module.exports = router;