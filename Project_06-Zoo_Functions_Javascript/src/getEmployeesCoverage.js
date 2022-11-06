const { employees, species } = require('../data/zoo_data');

const findAnimalsLocations = (array) => {
  const animalLocations = [];
  for (let index = 3; index < array.length; index += 1) {
    animalLocations.push(species.filter((specie) => specie.id === array[index])
      .reduce((acc, curr) => acc.concat(curr.location), [])
      .reduce((acc, curr) => acc.concat(curr), [])[0]);
  }
  return animalLocations;
};

const findAnimalsNames = (array) => {
  const animalNames = [];
  for (let index = 3; index < array.length; index += 1) {
    animalNames.push(species.filter((specie) => specie.id === array[index])
      .reduce((acc, curr) => acc.concat(curr.name), [])
      .reduce((acc, curr) => acc.concat(curr), [])[0]);
  }
  return animalNames;
};

const checkEmployeeExists = (array) => {
  if (array.length === 0) {
    throw new Error('Informações inválidas');
  }
};

const employeesCoverage = (array) => {
  const employeesCoverageData = [];
  array.forEach((element) => {
    const input = Object.values(element);
    const employeeRawData = employees.filter((employee) => employee.firstName === input[0]
    || employee.lastName === input[0] || employee.id === input[0]);
    checkEmployeeExists(employeeRawData);
    const employeeRelevantData = employeeRawData.reduce((acc, data) =>
      acc.concat(data.id, data.firstName, data.lastName, data.responsibleFor), []);
    employeesCoverageData.push({
      id: employeeRelevantData[0],
      fullName: `${employeeRelevantData[1]} ${employeeRelevantData[2]}`,
      species: findAnimalsNames(employeeRelevantData),
      locations: findAnimalsLocations(employeeRelevantData),
    });
  });
  return employeesCoverageData;
};

const getEmployeesCoverage = (userInput) => {
  const allIDs = employees.map((employee) => ({ id: employee.id }));
  const oneID = [];
  oneID.push(userInput);
  if (!userInput) return employeesCoverage(allIDs);
  return employeesCoverage(oneID).reduce((acc) => acc);
};

module.exports = getEmployeesCoverage;
