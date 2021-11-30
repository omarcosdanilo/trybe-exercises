let array = [];
let arrayDivide = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);

}

for (let number of array) {
    arrayDivide.push(number / 2);
}
console.log(array);
console.log(arrayDivide);