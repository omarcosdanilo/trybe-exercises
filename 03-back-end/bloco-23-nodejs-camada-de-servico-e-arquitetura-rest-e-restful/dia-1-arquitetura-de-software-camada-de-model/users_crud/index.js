const express = require('express');
const app = express();

app.use(express.json());

const User = require('./models/User');

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const err = User.isValid(firstName, lastName, email, password)
  
  if (err.error) return res.status(400).json(err);

  const user = await User.create(firstName, lastName, email, password);
  const { insertId } = user[0]

  return res.status(201).json(
    { id: insertId, firstName, lastName, email, password }
    );
})

app.listen('3001', () => console.log('Rodando na 3001'));