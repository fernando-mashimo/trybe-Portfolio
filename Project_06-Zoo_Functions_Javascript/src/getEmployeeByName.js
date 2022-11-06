const data = require('../data/zoo_data');

// Retorne um objeto vazio caso a função não receba parâmetros;
// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:

const getEmployeeByName = (employeeName) => {
  if (typeof employeeName === 'undefined') return {};
  return data.employees.find((individual) =>
    (individual.firstName === employeeName || individual.lastName === employeeName));
};

// console.log('Resultado vazio:', getEmployeeByName());
// console.log('Resultado com firtsName:', getEmployeeByName('Emery'));
// console.log('Resultado com lastName:', getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
