// let numbers = [2, 4, 6, 8, 10];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let values = 0
for (let i of numbers) {
  if (i % 2 !== 0) {
    values += 1
  }
}

if (values === 0) {
    console.log('Nenhum valor ímpar foi encontrado');
}
else {
    console.log(values)
}
