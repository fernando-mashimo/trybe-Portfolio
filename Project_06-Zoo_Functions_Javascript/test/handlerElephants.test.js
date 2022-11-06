const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('O parâmetro "count" retorna a quantidade de 4 elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('O parâmetro "names" retorna um array com os nomes dos 4 elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('O parâmetro "averageAge" retorna a média de idade dos 4 elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('O parâmetro "location" retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('O parâmetro "popularity" retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('O parâmetro "availability" retorna um array com os dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Se não for fornecido nenhum argumento, a função deve retornar "undefined"', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Se o parâmetro fornecido não for uma string, a função deve retornar a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Se string passada como parâmetro não contemplar uma funcionalidade, a função deve retornar "null"', () => {
    expect(handlerElephants('any')).toBe(null);
  });
});
