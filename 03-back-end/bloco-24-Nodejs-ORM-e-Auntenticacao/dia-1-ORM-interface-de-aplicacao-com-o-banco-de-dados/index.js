const express = require('express');
const app = express();

const booksRoute = require('./src/routes/booksRoute');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksRoute)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));