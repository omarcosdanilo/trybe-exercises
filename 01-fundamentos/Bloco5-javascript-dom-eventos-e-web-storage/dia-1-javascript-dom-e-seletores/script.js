// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeParagraph (paragraph) {
  let change = document.getElementById('description').innerText = paragraph;

  return change;
}
changeParagraph('Trabalhando muito');

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorSide (color) {
   let changeColorSide = document.getElementsByClassName('main-content')[0].style.background = color;
   return changeColorSide;
}
changeColorSide('rgb(76,164,109)')

//Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColorCenter(color2){
  let changeColorCenter = document.getElementsByClassName('center-content')[0].style.background = color2;
  return changeColorCenter;
}
changeColorCenter('white')
