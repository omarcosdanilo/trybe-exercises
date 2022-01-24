const books = require('./objeto-exercicio-2-3-4');

function reduceNames(acc, name) {
 return  `${acc}${name.author.name}, `
}

const string = books.reduce(reduceNames, '');

console.log(string);