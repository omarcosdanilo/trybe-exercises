const { json } = require('body-parser');
const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.json());

// app.post('/simpsons', async (req, res) => {
//   const simpsons = JSON.stringify(req.body);

//   try {
//     await fs.writeFile('./simpsons.json', simpsons)
//     return res.status(200).end();
//   } catch (error) {
//     return res.status(500).end();
//   }
// })

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf8');

    res.status(200).send(JSON.parse(simpsons));
  } catch (error) {
    res.status(400).end();  
  }
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonsParsed = JSON.parse(simpsons);
    const simpson = simpsonsParsed.find((s) => Number(s.id) === Number(id));

    if(!simpson) return  res.status(404).json({ message: 'simpson not found' })

    res.status(200).json(simpson);
    
  } catch (error) {
    res.status(400).end();
  }
})

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body
    const simpsons = await fs.readFile('simpsons.json', 'utf-8');
    const simpsonsParsed = JSON.parse(simpsons);
    const simpsonId = simpsonsParsed.findIndex((s) => Number(s.id) === Number(id))
    console.log(simpsonId);
    if(simpsonId !== -1) return res.status(409).json({ message: 'id already exists'});

    simpsonsParsed.push({ id, name })
    
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsParsed));

    return res.status(204).end();
  } catch (error) {
    return res.status(400).end();
  }
})
app.listen(4000, () => console.log('Rodando na porta 4000'));


