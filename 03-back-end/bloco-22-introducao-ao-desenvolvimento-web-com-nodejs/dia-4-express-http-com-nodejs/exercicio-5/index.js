const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.json());

app.post('/simpsons', async (req, res) => {
  const simpsons = JSON.stringify(req.body);

  try {
    await fs.writeFile('./simpsons.json', simpsons)
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
})

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf8');

    res.status(200).send(JSON.parse(simpsons));
  } catch (error) {
    res.status(400).end();  
  }
})
app.listen(4000, () => console.log('Rodando na porta 4000'));


