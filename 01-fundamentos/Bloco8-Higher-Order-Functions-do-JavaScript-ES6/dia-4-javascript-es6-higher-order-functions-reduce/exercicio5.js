const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(acc, curValue) {
  const a = curValue.split('').filter((letra) => letra === 'a' || letra === 'A');
  
  return acc += a.length
}

const times  = names.reduce(containsA, 0);

console.log(times);