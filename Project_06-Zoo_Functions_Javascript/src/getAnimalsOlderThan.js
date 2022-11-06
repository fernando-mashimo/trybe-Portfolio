const data = require('../data/zoo_data');

// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
// Os animais devem ter essa idade ou serem mais velhos.
// Retorne um valor booleano.

// O que será testado:
// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.

const getAnimalsOlderThan = (animal, age) =>
  data.species.filter((specimen) => specimen.name === animal)
    .reduce((acc, curr) => curr.residents, [])
    .map((individual) => individual.age)
    .every((individualAge) => individualAge >= age);

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
