const fs = require('fs');

const writeInFile = (nomeDoArquivo, conteudo) => {
  if(nomeDoArquivo && conteudo) {
    fs.writeFileSync(nomeDoArquivo, conteudo)
    return 'ok';
  }
  return "Deu ruim";

}
module.exports = writeInFile;