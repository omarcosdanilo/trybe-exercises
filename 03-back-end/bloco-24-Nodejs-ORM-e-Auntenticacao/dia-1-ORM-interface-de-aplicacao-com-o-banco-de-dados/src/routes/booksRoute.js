const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);

module.exports = router;