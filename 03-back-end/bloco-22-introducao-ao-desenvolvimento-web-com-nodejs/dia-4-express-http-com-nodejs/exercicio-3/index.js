const express = require('express');
const app = express();

app.use(express.json());

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).send({ message: "Unauthorized" });
  return res.status(200).send({ message: `Hello, ${name}`  });
})

app.listen(7000, () => console.log('Rodando na porta 7000'));