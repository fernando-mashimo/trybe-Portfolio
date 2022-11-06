const { species } = require('../data/zoo_data');

const allSpecies = () => {
  const obj = {};
  species.forEach((specimen) => {
    const { name, residents } = specimen;
    obj[name] = residents.length;
  });
  return obj;
};

const selectedBySpecieOnly = (array) => {
  const selectedSpecie = array.reduce((acc, curr) => acc + curr.specie, '');
  const speciePopulation = species.filter((specie) => specie.name === selectedSpecie)
    .reduce((acc, curr) => acc.concat(curr.residents), [])
    .length;
  return speciePopulation;
};

const selectedBySpecieAndSex = (array) => {
  const chosenSpecieSex = array.reduce((acc, curr) => acc.concat(curr.specie, curr.sex), []);
  const selectionPopulation = species.filter((specimen) => specimen.name === chosenSpecieSex[0])
    .reduce((acc, curr) => acc.concat(curr.residents), [])
    .filter((individual) => individual.sex === chosenSpecieSex[1])
    .length;
  return selectionPopulation;
};

const countAnimals = (...animal) => {
  if (animal.length === 0) return allSpecies();
  const chosenAnimal = animal.reduce((acc, curr) => acc.concat(curr.specie, curr.sex), []);
  if (typeof chosenAnimal[1] === 'undefined') return selectedBySpecieOnly(animal);
  return selectedBySpecieAndSex(animal);
};

module.exports = countAnimals;
