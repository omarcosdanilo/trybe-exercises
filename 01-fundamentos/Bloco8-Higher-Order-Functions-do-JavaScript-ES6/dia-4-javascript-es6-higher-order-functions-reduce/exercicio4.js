const books = require('./objeto-exercicio-2-3-4');

const longestNamedBook = (acc, curValue) => acc.name.length > curValue.name.length 
? acc : curValue

const longestBook = books.reduce(longestNamedBook)

console.log(longestBook);