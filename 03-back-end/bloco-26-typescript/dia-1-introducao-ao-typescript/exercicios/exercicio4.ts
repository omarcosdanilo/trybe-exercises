import readLineSync from 'readline-sync';
import YearMonths from './exercicio2';
import YearSeasons from './exercicio3';

const months = Object.values(YearMonths);

const chosenMonth = readLineSync.keyInSelect(months, 'Digite um mês');

const seasonsSouth = {
  [YearSeasons.OUTONO]: [YearMonths.MARCO, YearMonths.ABRIL, YearMonths.MAIO, YearMonths.JUNHO],
  [YearSeasons.INVERNO]: [YearMonths.JUNHO, YearMonths.JULHO, YearMonths.AGOSTO, YearMonths.SETEMBRO],
  [YearSeasons.PRIMAVERA]: [YearMonths.SETEMBRO, YearMonths.OUTUBRO, YearMonths.NOVEMBRO, YearMonths.DEZEMBRO],
  [YearSeasons.VERAO]: [YearMonths.DEZEMBRO, YearMonths.JANEIRO, YearMonths.FEVEREIRO, YearMonths.MARCO],
};

const seasonsNorth = {
  [YearSeasons.PRIMAVERA]: seasonsSouth[YearSeasons.OUTONO],
  [YearSeasons.VERAO]: seasonsSouth[YearSeasons.INVERNO],
  [YearSeasons.OUTONO]: seasonsSouth[YearSeasons.PRIMAVERA],
  [YearSeasons.INVERNO]: seasonsSouth[YearSeasons.VERAO],
};

const hemispheres = {
  "Norte": seasonsNorth,
  'Sul': seasonsSouth
};

const chosenHemisphere = readLineSync.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');

const month = Object.values(YearMonths)[chosenMonth];

const hemisphere = Object.keys(hemispheres)[chosenHemisphere];

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações:`);

const chosenHemisphereSeasons = Object.values(hemispheres)[chosenHemisphere];

Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
 
    if (months.includes(month)) console.log(seasons);
});

