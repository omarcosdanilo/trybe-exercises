// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.body
let h1 = document.createElement('h1');

body.appendChild(h1);
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
let body2 = document.body;
let main = document.createElement('main');

body2.appendChild(main)
main.className = 'main-content'

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2

let mainContent = document.querySelector('.main-content');
let mainSection = document.createElement('section');

mainContent.appendChild(mainSection);
mainSection.className = 'center-content';

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let mySection = document.querySelector('.center-content');
let sectionParagraph = document.createElement('p');

mySection.appendChild(sectionParagraph);
sectionParagraph.innerText = 'Esse DOM é difícil, mas to começando a aprender';

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement('section');
mainContent.appendChild(leftContent);

leftContent.className = 'left-content';