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

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightContent = document.createElement('section');
mainContent.appendChild(rightContent);

rightContent.className = 'right-content';

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img');
leftContent.appendChild(img);

img.className = 'small-image';
img.src = 'https://picsum.photos/200';

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let rightSection = document.querySelector('.right-content');
let list = document.createElement('ul');
rightSection.appendChild(list);

const array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < array.length; i += 1) {
  let listItem = document.createElement('li');
  listItem.innerText = array[i];
  list.appendChild(listItem);
}