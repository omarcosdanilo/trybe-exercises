const books = require('./objeto-exercicio-2-3-4');

const media = books.reduce((acc, curValue, index, arr) => {
  const total = acc += curValue.releaseYear - curValue.author.birthYear
  return total 
}, 0) / books.length;

console.log(media);