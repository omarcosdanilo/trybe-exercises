const express = require('express');
const app = express();
require('express-async-errors')

const pingRoute = require('./routes/pingRouter');
const cepRoutes = require('./routes/cepRoutes');

app.use(express.json());

app.use('/ping', pingRoute)
app.use('/cep', cepRoutes)

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json(
      { "error": { "code": "invalidData", "message": "CEP inválido" } }
    ); 
    break;
    case 'notFound': res.status(404).json({ "error": { "code": name, "message": message }}); break;
    default: console.warn(err); res.sendStatus(500);
  }
})

app.listen('3001', () => console.log('Rodando na porta 3001'));