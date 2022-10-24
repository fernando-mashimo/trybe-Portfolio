const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // Teste se productDetails é uma função.
  it('Verifica que o tipo da função `productDetails` é function', () => {
    expect(typeof productDetails).toBe('function');
  });
  // Teste se o retorno da função é um array.
  it('Verifique que o retorno da função é um array.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  });
  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifique que o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifique que os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifique que quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).not.toBe([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } }
    ]);
    expect(productDetails('Alcool gel', 'Máscara')).not.toBe([
      { name: 'Máscara', details: { productId: 'Máscara123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
    expect(productDetails('Máscara', 'Alcool gel')).not.toBe([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } }
    ]);
    expect(productDetails('Máscara', 'Alcool gel')).not.toBe([
      { name: 'Máscara', details: { productId: 'Máscara123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
  });
  // Teste se os dois productIds terminam com 123.
  it('Verifique que os dois productIds terminam com 123.', () => {
    expect(Object.values(Object.values(productDetails('Alcool gel', 'Máscara')[0])[1]).toString().slice(-3)).toBe('123');
    expect(Object.values(Object.values(productDetails('Alcool gel', 'Máscara')[1])[1]).toString().slice(-3)).toBe('123');
  });
});
