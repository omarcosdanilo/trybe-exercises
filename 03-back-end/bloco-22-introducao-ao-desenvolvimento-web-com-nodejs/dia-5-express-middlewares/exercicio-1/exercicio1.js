const express = require('express');
const app = express();

app.use(express.json());

validateProductName = (req, res, next) => {
  const { productName } = req.body;

  if (!productName) return res.status(400).json({ "message": "O campo productName é obrigatório" });
  if(productName.length < 4) return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });

  next();
}

app.post('/sales', validateProductName,  (req, res) => {
  res.status(201).json({ "message": 'Succesfully created'});
})

app.listen(4000, () => console.log('Rodando na porta 4000'));