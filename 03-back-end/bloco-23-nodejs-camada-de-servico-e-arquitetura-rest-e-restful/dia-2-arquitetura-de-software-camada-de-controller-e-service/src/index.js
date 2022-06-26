const express = require('express');
const app = express();

const pingRoute = require('./routes/pingRouter');

app.use(express.json());

app.use('/ping', pingRoute)

app.listen('3001', () => console.log('Rodando na porta 3001'));