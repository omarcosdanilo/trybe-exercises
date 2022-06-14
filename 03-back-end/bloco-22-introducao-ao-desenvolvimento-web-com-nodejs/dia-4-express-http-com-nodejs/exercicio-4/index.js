const express = require('express');
const app = express();

app.use(express.json());

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  console.log(name, age)
  return res.status(200).send({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  })
});

app.listen(3001, () => console.log('Rodando na porta 3001'))