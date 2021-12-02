// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxIndex () {
  let myArray = [2, 3, 6, 7, 10, 1];

  let max = myArray[0]

  for (index in myArray) {
    if(myArray[index] > max ) {
      max = index;
    }
  }
  return max;
}

console.log(maxIndex());