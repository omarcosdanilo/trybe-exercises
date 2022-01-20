const books = require("./objeto");

const oldBooks = (array) => {
  const newArray = array.filter((book) =>(2022 - book.releaseYear) > 60);

  return newArray.map((book) => book.name)
}

console.log(oldBooks(books));

