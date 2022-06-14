const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' })
})

app.listen(4000, () => console.log('Rodando na porta 4000'));