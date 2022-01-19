const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const exibir = (correctAnswers, verifyAnswers, callback) => {
  return callback(correctAnswers, verifyAnswers);
}


const checkAnswers = (rightAnswers, studentAnswers) => {
  let total = 0;
  studentAnswers.map( (element, index) => {
    if (element === rightAnswers[index]) {
      total += 1;
    }
    if (element === 'N.A') {
      total += 0;
    }
    if (element !== rightAnswers[index] && element !== 'N.A') {
      total -= 0.5;
    }
  })
  return total;
}
console.log(exibir(rightAnswers, studentAnswers, checkAnswers));



