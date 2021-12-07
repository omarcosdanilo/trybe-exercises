// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.body

let h1 = document.createElement('h1');

body.appendChild(h1)
h1.innerText = 'Exercício 5.2 - JavaScript DOM'