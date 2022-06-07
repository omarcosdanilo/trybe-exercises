const readline = require('readline-sync');

const sorteiaNumero = () => {
  const numeroSorteado = Math.round(Math.random() * 10 + 1);
  const numeroEscolhido = readline.questionInt('Digite um numero entre 0 e 10: ');
  comparaNumeros(numeroSorteado, numeroEscolhido);
} 

const comparaNumeros = (numeroSorteado, numeroEscolhido) => {
  if (numeroSorteado === numeroEscolhido) {
    console.log('Parabéns, número correto!!!')
  } else {
    console.log(`Opa, não foi dessa vez. O número sorteado era ${numeroSorteado}`)
  }
  jogarDeNovo();
}

const jogarDeNovo = () => {
  const playAgain = readline.question('Deseja jogar novamente? Digite s para sim ou n para não: ');
  
  if(playAgain === 's') {
    sorteiaNumero();
  } else {
    console.log('Obrigado, até a próxima');
  }

}

sorteiaNumero();

