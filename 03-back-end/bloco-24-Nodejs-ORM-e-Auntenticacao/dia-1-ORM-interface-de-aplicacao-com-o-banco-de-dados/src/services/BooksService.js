const { Book } = require('../models');
const BooksService = {
  async exists(id) {
    const book = await Book.findByPk(id);

    return !!book;
  },

  async getAll() {
    const books = await Book.findAll();
    
    return books;
  },

  async getById(id) {
    const book = await Book.findByPk(id);

    return book;
  },

  async create(title, author, pageQuantity) {
    const created = await Book.create({title, author, pageQuantity});
    return created;
  },

  async update(id, updates) {
    const { title, author, pageQuantity } = updates;
    const updated = Book.update({ title, author, pageQuantity }, { where: { id } });

    return updated;
  }
};

module.exports = BooksService;