const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);

validateProductName = (req, res, next) => {
  const { productName } = req.body;

  if (!productName) return res.status(400).json({ "message": "O campo productName é obrigatório" });
  if(productName.length < 4) return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });

  next();
}

validateInfos = (req, res, next) => {
  const { infos } = req.body;
  const formatoValido = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = formatoValido.test(infos.saleDate);

  if(!infos) return res.status(400).json({ "message": "O campo infos é obrigatório" });
  if (!infos.saleDate) return res.status(400).json({ "message": "O campo saleDate é obrigatório"});
  if (!infos.warrantyPeriod) return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório"});
  if (!match) return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
  if (infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3) return res.status(400).json({
    "message": "O campo warrantyPeriod precisa estar entre 1 e 3"
  })

  next();
}

app.post('/sales', validateProductName, validateInfos,(req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso"});
})

app.post('/signup', (req, res) => {
  const { token } = req.token;
  res.status(200).json({ token });
})

app.listen(4000, () => console.log('Rodando na porta 4000'));