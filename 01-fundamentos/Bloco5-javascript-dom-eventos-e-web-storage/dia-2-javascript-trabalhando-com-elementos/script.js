// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.body
let h1 = document.createElement('h1');

body.appendChild(h1);
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
let body2 = document.body;
console.log(body2);
let main = document.createElement('main');

body2.appendChild(main)
main.className = 'main-content'