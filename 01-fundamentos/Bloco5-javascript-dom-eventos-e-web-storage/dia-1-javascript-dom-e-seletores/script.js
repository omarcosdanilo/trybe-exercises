// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeParagraph (paragraph) {
  let change = document.getElementById('description').innerText = paragraph;

  return change;
}
changeParagraph('Trabalhando muito');
