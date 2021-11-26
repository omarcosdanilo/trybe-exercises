let peca1 = 'BISPO';
let peca1Correct = peca1.toLowerCase();

let peca2 = 'CaVaLo'
let peca2Correct = peca2.toLowerCase();

let conceito = peca1Correct;


switch(conceito) {
    case 'bispo':
        console.log('Esta peça movimenta nas diagonais');
        break;

    case 'cavalo':
        console.log('Esta peça movimenta em L');
        break;
}