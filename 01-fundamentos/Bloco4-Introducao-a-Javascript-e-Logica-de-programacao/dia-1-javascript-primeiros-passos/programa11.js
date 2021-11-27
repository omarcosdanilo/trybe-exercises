let salarioBruto = 6000;
let salarioLiquido;
let salarioBase;

const inssFaixa1 = salarioBruto <= 1556.94;
const inssFaixa2 = salarioBruto >= 1556.95 && salarioBruto <= 2594.92;
const inssFaixa3 = salarioBruto >= 2594.93 && salarioBruto <= 5189.82;
const inssFaixa4 = salarioBruto >= 5189.82;



if (inssFaixa1) {
    salarioBase = (salarioBruto - (salarioBruto * 0.08));
}
else if (inssFaixa2){
    salarioBase = (salarioBruto - (salarioBruto * 0.09));
}
else if (inssFaixa3) {
    salarioBase = (salarioBruto - (salarioBruto * 0.11));
}
else if (inssFaixa4) {
    salarioBase = (salarioBruto - 570.88);
}


const irFaixa1 = salarioBase <= 1903.98
const irFaixa2 = salarioBase >= 1903.99 && salarioBase <= 2826.65;
const irFaixa3 = salarioBase >= 2826.66 && salarioBase <= 3751.05;
const irFaixa4 = salarioBase >= 3751.06 && salarioBase <= 4664.68;
const irFaixa5 = salarioBase > 4664.68


if (irFaixa1) {
    salarioLiquido = salarioBase;
}
else if (irFaixa2) {
    salarioLiquido = (salarioBase - (salarioBase * 0.075)) + 142.80
}
else if (irFaixa3) {
    salarioLiquido = (salarioBase - (salarioBase * 0.15)) + 354.80
}
else if (irFaixa4) {
    salarioLiquido = (salarioBase - (salarioBase * 0.225)) + 636.13
}
else if (irFaixa5) {
    salarioLiquido = (salarioBase - (salarioBase * 0.275)) + 869.36
}

console.log(salarioLiquido);
