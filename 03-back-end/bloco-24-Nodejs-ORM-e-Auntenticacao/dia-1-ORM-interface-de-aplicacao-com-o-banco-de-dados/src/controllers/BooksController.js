const BooksService = require('../services/BooksService');

const BooksController = {
  async getAll(req, res, next) {
    try {
      const books = await BooksService.getAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

module.exports = BooksController