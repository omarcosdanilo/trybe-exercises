const books = require("./objeto");

function authorWith3DotsOnName(array) {
 return array.find((book) => {
   return book.author.name.startsWith('J. R. R.')
 }).name
}

console.log(authorWith3DotsOnName(books))