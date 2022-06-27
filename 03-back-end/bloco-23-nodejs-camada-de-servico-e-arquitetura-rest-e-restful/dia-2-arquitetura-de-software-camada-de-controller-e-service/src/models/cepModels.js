const db = require('./connection');

const cepModel = {

  format(cep) {   
    return  cep.split("-").join("");
  },

  async exists(cep) {
    const existsCep = 'SELECT 1 from cep_lookup.ceps WHERE cep = ?';
    const formated = this.format(cep);
    const [[existsInDb]] = await db.query(existsCep, [formated]);
    return !!existsInDb;
  },

  async get(cep) {
    const query = 'SELECT * from cep_lookup.ceps WHERE cep = ?'
    const formated = this.format(cep);
    const [[address]] = await db.query(query, [formated]);
    
    return address;
  }

}

module.exports = cepModel;