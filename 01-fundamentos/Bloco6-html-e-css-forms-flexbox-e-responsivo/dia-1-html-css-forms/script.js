
let estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
  ];
  
  function criaEstado (estados) {
    let estadosContainer = document.querySelector('#input-estado');

    for (estado of estados) {
     let option = document.createElement('option');
     option.innerHTML = estado;
     estadosContainer.appendChild(option)
    
    }
    
  }
  criaEstado(estados);