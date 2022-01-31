const { test, expect } = require("@jest/globals");


const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test('Espera que ao chamar a função uppercase passando uma função callback, retorne a string maiúscula', (done) => {

  uppercase('marcos', (string) => {
    try {
      expect(string).toBe('MARCOS');
      done();
    } catch (error) {
      done(error);
    }
  }) 
});