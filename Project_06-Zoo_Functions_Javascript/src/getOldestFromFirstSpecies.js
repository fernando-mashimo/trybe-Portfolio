const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstSpecie = employees.filter((employee) => employee.id === id)
    .map((employee) => employee.responsibleFor[0]);
  const oldestAnimal = species.filter((specie) => specie.id === firstSpecie[0])
    .map((animal) => animal.residents)
    .reduce((acc, curr) => acc.concat(curr), [])
    .sort((animalA, animalB) => animalB.age - animalA.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
