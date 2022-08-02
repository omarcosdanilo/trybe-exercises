const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
   }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MoviesService.getById(id)
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
}
module.exports = {
  create,
  getById
};