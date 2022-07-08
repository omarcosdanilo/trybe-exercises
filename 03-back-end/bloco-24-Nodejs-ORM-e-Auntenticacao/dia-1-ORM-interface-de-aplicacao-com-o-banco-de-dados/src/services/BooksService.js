const { Book } = require('../models');
const BooksService = {

  async getAll() {
    const books = await Book.findAll();
    
    return books;
  },

  async getById(id) {
    const book = await Book.findByPk(id);

    return book;
  },

  async create({title, author, pageQuantity}) {
    const created = await Book.create({title, author, pageQuantity});
    return created;
  }
};

module.exports = BooksService;