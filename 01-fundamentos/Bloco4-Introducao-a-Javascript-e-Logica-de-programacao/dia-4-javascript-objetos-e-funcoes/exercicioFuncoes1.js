// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function invert (palavraInvertida) {
  return palavraInvertida.split('').reverse().join('')
}

let palavraInvertida = invert('marcos')
console.log(palavraInvertida);

   function verificaPalindromo (palavra) {
     if (palavra === palavraInvertida)  {
       return true;
     } 
     else {
       return false;
     }
   }

   console.log(verificaPalindromo('1991'))




