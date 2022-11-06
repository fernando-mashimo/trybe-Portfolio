const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não for informado o dia e a hora, a função retorna objeto contendo os dias e horários de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Se for informado um dia e horário em que o zoológico está fechado, deve ser retornada a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Se for informado um dia e horário em que o zoológico está aberto, deve ser retornada a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Se for informado um horário em que o zoológico está fechado, deve ser retornada a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '07:00-AM')).toBe('The zoo is closed');
  });
  it('Se a hora ou minutos passados não forem numerais, a função deve retornar um erro', () => {
    const actualDay = 'Wednesday';
    const actualHour = 'A0:00-AM';
    expect(() => getOpeningHours(actualDay, actualHour)).toThrow(/^The hour should represent a number$/);
  });
  it('Se o período informado não for "AM" ou "PM", a função deve retornar um erro', () => {
    const actualDay = 'Wednesday';
    const actualHour = '11:00-XX';
    expect(() => getOpeningHours(actualDay, actualHour)).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Se a hora informada não estiver no intervalo de 0 a 12, a função deve retornar um erro', () => {
    const actualDay = 'Wednesday';
    const actualHour = '13:00-AM';
    expect(() => getOpeningHours(actualDay, actualHour)).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Se o minuto informado não estiver no intervalo de 0 a 59, a função deve retornar um erro', () => {
    const actualDay = 'Wednesday';
    const actualHour = '11:99-AM';
    expect(() => getOpeningHours(actualDay, actualHour)).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('Se o dia informado for inválido, a função deve retornar um erro', () => {
    const actualDay = 'Xablau';
    const actualHour = '11:00-AM';
    expect(() => getOpeningHours(actualDay, actualHour)).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Se a hora informada for igual a 12:00-PM e o zoológico estiver aberto nesse dia, a função deve retornar a string "The zoo is open"', () => {
    const actualDay = 'Wednesday';
    const actualHour = '12:00-PM';
    expect(getOpeningHours(actualDay, actualHour)).toBe('The zoo is open');
  });
});
