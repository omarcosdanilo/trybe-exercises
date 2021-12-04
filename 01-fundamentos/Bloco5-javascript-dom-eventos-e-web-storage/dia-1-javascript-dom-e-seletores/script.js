// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeParagraph (paragraph) {
  let change = document.getElementById('description').innerText = paragraph;

  return change;
}
changeParagraph('Trabalhando muito');

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColor (color) {
   let changeColor = document.getElementsByClassName('main-content')[0].style.background = color;
   return changeColor;
}
changeColor('rgb(76,164,109)')
