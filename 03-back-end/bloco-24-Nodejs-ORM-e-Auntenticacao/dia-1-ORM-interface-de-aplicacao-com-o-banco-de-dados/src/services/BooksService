const { BooksModel } = require('../models');
const BooksService = {

  async getAll() {
    const books = await BooksModel.findAll();
    
    return books;
  }
};

module.exports = BooksService;