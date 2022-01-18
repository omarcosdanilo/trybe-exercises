const random = () => {
  const number = Math.round(Math.random() * 4 + 1);
  return number;
}

const verify = (aposta, func) => {
  let message = '';
  let number = func();
  if (aposta === number) {
    message = `Parabéns, você ganhou!!"
    Sua aposta: ${aposta}
    Numero sorteado: ${number}`
  }
  else {
    message = `Tente novamente!!!
    Sua aposta: ${aposta}
    Numero sorteado: ${number}`
  }
  return message;
}

console.log(verify(3, random));