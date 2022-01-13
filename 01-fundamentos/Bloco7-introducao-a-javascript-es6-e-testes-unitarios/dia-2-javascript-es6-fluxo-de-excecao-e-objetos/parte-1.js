function verificaNumero(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Digite somente números');
  }
  if (value1 === '' || value2 === '') {
    throw new Error('Você deve digitar dois valores numéricos')
  } 
}

function sum() {
  try{
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verificaNumero(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}