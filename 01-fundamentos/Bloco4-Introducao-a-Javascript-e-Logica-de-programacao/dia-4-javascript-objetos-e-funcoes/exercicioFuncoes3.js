// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minIndex () {
  let myArray = [2, 4, 6, 7, 10, 0, -3];;

  let max = myArray[0]

  for (index in myArray) {
    if(myArray[index] < max ) {
      max = index;
    }
  }
  return max;
}

console.log(minIndex());