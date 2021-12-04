// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function biggestName (nomes){

  let maiorNome = nomes[0];

  for (let nome of nomes) {
    if (nome.length > maiorNome.length) {
      maiorNome = nome;
    }
  }
  return maiorNome;
}


console.log(biggestName(nomes))