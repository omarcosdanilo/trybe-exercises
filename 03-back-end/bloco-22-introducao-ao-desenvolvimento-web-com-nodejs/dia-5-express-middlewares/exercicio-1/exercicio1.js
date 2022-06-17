const express = require('express');
const app = express();

app.use(express.json());

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
  if (!infos.saleDate) return res.status(400).json({ "message": "infos deve possuir o campo saleDate"});
  if (!infos.warrantyPeriod) return res.status(400).json({ "message": "infos deve possuir o campo warrantyPeriod"});
  if (!match) return res.status(400).json({ "message": "O formato dd/mm/aaaa é obrigatório" });
  next();
}

app.post('/sales', validateProductName, validateInfos,(req, res) => {
  res.status(201).json({ "message": 'Succesfully created'});
})

app.listen(4000, () => console.log('Rodando na porta 4000'));