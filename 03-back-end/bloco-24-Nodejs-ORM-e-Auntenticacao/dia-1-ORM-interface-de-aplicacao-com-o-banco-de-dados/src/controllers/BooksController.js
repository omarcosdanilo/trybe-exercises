const BooksService = require('../services/BooksService');

const BooksController = {
  async getAll(req, res, next) {
    try {
      const books = await BooksService.getAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const book = await BooksService.getById(id);

      if(!book) return res.status(404).json({ message: "Book not found" });

      return res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async create(req, res, next) {
    try {
      const {title, author, pageQuantity} = req.body;
      
      const createdBook = await BooksService.create(title, author, pageQuantity);

      res.status(200).json(createdBook);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

module.exports = BooksController