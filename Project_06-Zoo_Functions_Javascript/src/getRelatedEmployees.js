const data = require('../data/zoo_data');

const isManager = (id) => data.employees.map((individual) => individual.managers)
  .reduce((acc, curr) => acc.concat(curr), [])
  .some((managerIdNumber) => managerIdNumber === id);

const verifyIsManager = (id) => {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

const getRelatedEmployees = (managerId) => {
  verifyIsManager(managerId);
  return data.employees.filter((employee) =>
    employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
