const readLine = require('readline-sync');

const peso = readLine.questionFloat('Digite seu peso: ');
const altura = readLine.questionFloat('Digite sua altura em metros utilizando ponto: ')

const imc = peso/altura**2;

switch(true) {
  case imc <= 18.5:
    console.log(`Seu imc é ${imc} e você está abaixo do peso`)
    break;
  case imc >= 18.5 && imc <= 24.9:
    console.log(`Seu imc é ${imc} e você está com peso normal`)
    break;
  case imc >= 25 && imc <= 29.9:
    console.log(`Seu imc é ${imc} e você está acima do peso`)
    break;
  case imc >= 30 && imc <= 34.9:
    console.log(`Seu imc é ${imc} e você está com Obesidade  grau I`) 
    break;
  case imc >= 35 && imc <= 39.9:
    console.log(`Seu imc é ${imc} e você está com obesidade grau II`)
    break;
  case imc >= 40:
    console.log(`Seu imc é ${imc} e você está com obesidade grau III e IV`)
    break;
  default:
    console.log('Oi');
}