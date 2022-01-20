const books = require("./objeto");

function fantasyOrScienceFictionAuthors(array, genre1, genre2) {
  const newArray = array.filter( (book) => book.genre === genre1 || book.genre === genre2);

  return newArray.map((book) => book.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors(books, 'Ficção Científica', 'Fantasia'));
