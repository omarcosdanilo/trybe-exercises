// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, array) {
  return acc.concat(array);
}

const newArray = arrays.reduce(flatten)
console.log(newArray);