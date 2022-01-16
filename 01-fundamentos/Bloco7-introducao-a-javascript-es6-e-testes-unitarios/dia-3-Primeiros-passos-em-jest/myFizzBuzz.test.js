const myFizzBuzz = require('./myFizzBuzz');

it('Ao chamar myFizzBuzz(15) espera que retorne "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('Ao chamar myFizzBuzz(3) espera que retorne "fizz"', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

it('Ao chamar myFizzBuzz(5) espera que retorne "buzz"', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

it('Ao chamar myFizzBuzz(2) espera que retorne 2', () => {
  expect(myFizzBuzz(2)).toBe(2);
});

it('Ao chamar myFizzBuzz("a") espera que retorne false', () => {
  expect(myFizzBuzz('a')).toBe(false);
});