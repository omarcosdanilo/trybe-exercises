// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .

let array = [2, 3, 2, 5, 8, 2, 3];

function maxRepeat (array) {

  let repeats = 0;

  for (let n of array){
    for (let n2 of array){
      if (n === n2){
        repeats += 1
        
      }
    }
  }
  return repeats;
}

console.log(maxRepeat(array))

