const books = require("./objeto");

const published60Years = (array) => {
  return array.filter((book) => {
    return (2022 - book.releaseYear) > 60;
  }).sort((a, b) => a.releaseYear - b.releaseYear );
}

console.log(published60Years(books))

