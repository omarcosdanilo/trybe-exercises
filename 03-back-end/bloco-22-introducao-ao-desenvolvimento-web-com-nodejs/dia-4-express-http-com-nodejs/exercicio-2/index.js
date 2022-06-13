const express = require('express');
const app = express();

app.use(express.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).send({ message: `Hello ${name}` });
})

app.listen(6000, () => console.log('Rodando na porta 6000'))