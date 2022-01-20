const books = require("./objeto");

const newArray = (array, genre1, genre2) => {
  return array.filter( (book) => book.genre === genre1 || book.genre === genre2)
};

console.log(newArray(books, 'Ficção Científica', 'Fantasia'));
