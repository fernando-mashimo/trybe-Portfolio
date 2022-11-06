const { species } = require('../data/zoo_data');

const locations = [...new Set(species.reduce((acc, curr) => acc.concat(curr.location), []))];

const getSpecies = (locationString) => species
  .filter((specie) => specie.location === locationString);

const speciesPerLocation = () => {
  const obj = {};
  locations.forEach((location) => {
    Object.assign(obj, {
      [location]: getSpecies(location).map((animal) => animal.name),
    });
  });
  return obj;
};

const namesFiltered = (array, options) => {
  const namesFilteredBySex = [];
  array.forEach((element) => {
    element.forEach((individual) => {
      if (individual.sex === options.sex) namesFilteredBySex.push(individual.name);
    });
  });
  if (Object.keys(options).includes('sorted')) namesFilteredBySex.sort();
  return namesFilteredBySex;
};

const requestedData = (array, options) => {
  const names = [];
  array.forEach((element) => {
    element.forEach((individual) => {
      names.push(individual.name);
    });
  });
  if (Object.keys(options).includes('includeNames') && Object.keys(options).length === 1) {
    return names;
  }
  if (Object.keys(options).includes('sorted') && Object.keys(options).length === 2) {
    return names.sort();
  }
  return namesFiltered(array, options);
};

const getSpeciesAndResidents = (locationString, options) => {
  const locationSpeciesAndResidents = [];
  const speciesName = getSpecies(locationString).map((animal) => animal.name);
  const residentsPerSpecies = speciesName
    .reduce((acc, currSpecie) => acc.concat(species
      .filter((specie) => specie.name === currSpecie)
      .map((animal) => animal.residents)), []);
  for (let index = 0; index < speciesName.length; index += 1) {
    const obj = {
      [speciesName[index]]: requestedData([residentsPerSpecies[index]], options),
    };
    locationSpeciesAndResidents.push(obj);
  }
  return locationSpeciesAndResidents;
};

const residentsPerLocation = (options) => {
  const obj = {};
  locations.forEach((location) => {
    Object.assign(obj, {
      [location]: getSpeciesAndResidents(location, options),
    });
  });
  return obj;
};

const getAnimalMap = (options) => {
  if (!options || !Object.keys(options).includes('includeNames')) return speciesPerLocation();
  return residentsPerLocation(options);
};

module.exports = getAnimalMap;
