function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

console.log(myFizzBuzz(15));
console.log(myFizzBuzz(3));
console.log(myFizzBuzz(5));
console.log(myFizzBuzz(2));
console.log(myFizzBuzz('a'));
module.exports = myFizzBuzz;
// implemente seus testes aqui