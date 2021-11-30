let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Controle de iterações.
for (let i = 0; i < numbers.length -1; i += 1){
  //Controle de comparações
  for (let j = 0; j < numbers.length - (i + 1); j += 1) { // o n - (i + 1) controla/reduz a quantidade de comparações desnecessárias, fazendo com que a cada iteração diminua uma comparação.
    if (numbers[j] < numbers[j + 1]) {
      let aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
     
    }
  }
}
console.log(numbers);