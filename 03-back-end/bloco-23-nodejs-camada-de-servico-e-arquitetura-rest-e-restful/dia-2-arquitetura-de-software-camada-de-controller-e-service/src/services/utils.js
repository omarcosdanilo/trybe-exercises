// const throwInvalidCepError = (message) => {
//   const error = new Error(message);
//   error.name = 'InvalidData';
//   throw error;
// };

const throwNotFoundCep = (message) => {
  const error = new Error(message);
  error.name = 'notFound';
  throw error;
}

module.exports = {
  // throwInvalidCepError,
  throwNotFoundCep
}