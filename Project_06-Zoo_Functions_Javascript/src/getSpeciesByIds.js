const data = require('../data/zoo_data');

// Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.

// Faça com que a função getSpeciesByIds possa receber vários parâmetros;

// Retorne um array vazio se a função não receber um id;

// Retorne as seguintes informações do arquivo data:
// Se a função receber apenas um id, retorne a espécie do animal referente a este id;
// Se a função receber vários ids, retorne todas as espécies referente a esses ids.

// Fornecendo 1 id como parâmetro
// const getSpeciesByIds = (id) => {
//   if (typeof id === 'undefined') return [];
//   return data.species.filter((specimen) => {
//     return specimen.id === id;
//   });
// };
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  const foundAnimals = [];
  ids.forEach((id) => {
    data.species.forEach((specimen) => {
      if (specimen.id === id) foundAnimals.push(specimen);
    });
  });
  return foundAnimals;
};

// console.log('Chamando função sem ID:', getSpeciesByIds());
// console.log('Chamando função c/ 1 ID:', getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log('Chamando função c/ 2 IDs:', getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
