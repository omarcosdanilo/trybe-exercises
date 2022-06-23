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

app.get('/user', async (req, res) => {
  const users = await User.getUsers();
  
  return res.status(200).json(users);
})

app.get('/user/:id', async(req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (user.length === 0) return res.status(404).json({ "error": true, message: "Usuário não encontrado"});

  return res.status(200).json(user);
})

app.put('/user/:id', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const err = User.isValid(firstName, lastName, email, password)
  
  if (err.error) return res.status(400).json(err);

  const updated = await User.update(id, firstName, lastName, email, password);

  if (!updated) return res.status(404).json({
    "error": true,
	  "message": "Usuário não encontrado"
  })

  return res.status(200).json({ id, firstName, lastName, email, password });
})
app.listen('3001', () => console.log('Rodando na 3001'));