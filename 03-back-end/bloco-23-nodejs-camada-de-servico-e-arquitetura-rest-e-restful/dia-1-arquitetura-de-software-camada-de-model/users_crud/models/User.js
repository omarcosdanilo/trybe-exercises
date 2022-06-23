const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  let err = '';
  if (!firstName) err = {"error": true, "message": `O campo firstName é obrigatório`};
  if (!lastName) err = {"error": true, "message": `O campo lastName é obrigatório`};
  if (!email) err = {"error": true, "message": `O campo email é obrigatório`};
  if (!password) err = {"error": true, "message": `O campo password deve ter pelo menos 6 caracteres`};

  return err;
}

const create = async (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO users_crud.users (first_Name, last_Name, email, password) VALUES (?,?,?, ?)',
  [firstName, lastName, email, password]
)

module.exports = {
  create,
  isValid,
}