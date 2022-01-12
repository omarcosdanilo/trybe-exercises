let maiorPalavra = (frase) => {
  let arrayPalavras = frase.split(' ')
  let palavra = '';
 
  for (let i = 0; i < arrayPalavras.length; i+= 1) {
    if (arrayPalavras[i].length > palavra.length) {
      palavra = arrayPalavras[i];
    }
  }
  return `A maior palavra é: ${palavra}`;
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));