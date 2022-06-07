const readLine = require('readline-sync');

const distancia = readLine.questionInt('Qual a distancia em metros? ');
const tempo = readLine.questionInt('Qual o tempo gasto em segundos? ');

const vm = distancia / tempo;

console.log(`${vm.toFixed(2)}m/s²`);