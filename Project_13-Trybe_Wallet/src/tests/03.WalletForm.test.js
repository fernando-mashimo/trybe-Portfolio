import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
// import mockData from './helpers/mockData';

describe('Verificação de elementos e funcionalidades do componente WalletForm', () => {
//   afterEach(() => {
//     global.fetch.mockClear();
//   });

  beforeEach(() => {
    const initialEntries = ['/carteira'];
    const initialState = { user: { email: 'teste@gmail.com' } };
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });
    // jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    //   json: () => Promise.resolve(mockData),
    // }));
  });

  const valueInput = 'value-input';
  const descriptionInput = 'description-input';

  // it('Ao carregar o componente, é feita uma requisição à API de moedas', () => {
  //   expect(global.fetch).toHaveBeenCalledTimes(1);
  //   expect(global.fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
  // });

  it('Deve haver um campo editável para o valor da despesa a ser cadastrada', () => {
    const inputValue = screen.getByTestId(valueInput);

    userEvent.type(inputValue, '500');

    expect(inputValue).toHaveValue('500');
  });

  it('Deve haver um campo editável para a descrição da despesa a ser cadastrada', () => {
    const inputDescription = screen.getByTestId(descriptionInput);

    userEvent.type(inputDescription, 'Teste Xablau1');

    expect(inputDescription).toHaveValue('Teste Xablau1');
  });

  it('Deve haver um menu do tipo select para seleção da moeda', () => {
    const selectCurrency = screen.getByTestId('currency-input');
    expect(selectCurrency).toBeInTheDocument();
  });

  it('Deve haver um menu do tipo select para seleção do meio de pagamento', () => {
    const selectMethod = screen.getByTestId('method-input');
    expect(selectMethod).toBeInTheDocument();
  });

  it('Deve haver um menu do tipo select para seleção da categoria da despesa', () => {
    const selectTag = screen.getByTestId('tag-input');
    expect(selectTag).toBeInTheDocument();
  });

  it('Deve haver um botão com o texto "Adicionar despesa"', () => {
    const buttonAddExpense = screen.getByRole('button');
    expect(buttonAddExpense).toHaveTextContent('Adicionar despesa');
  });

  //   it('Ao informar valores nos campos de input e selects e clicar no botão, é feita uma requisição à API', () => {});

  it('Ao clicar no botão "Adicionar despesa" os campos de Valor e Descrição são esvaziados', async () => {
    const inputValue = screen.getByTestId(valueInput);
    userEvent.type(inputValue, '500');
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputDescription, 'Teste Xablau2');

    const buttonAddExpense = screen.getByRole('button');
    userEvent.click(buttonAddExpense);

    const blankInputFields = await screen.findAllByDisplayValue('');
    expect(blankInputFields[0]).toHaveAttribute('data-testid', valueInput);
    expect(blankInputFields[1]).toHaveAttribute('data-testid', descriptionInput);
  });

  it('Ao clicar no botão "Editar", é habilitado um botão "Editar despesa" no Header', async () => {
    const textDescription = 'Teste Xablau3';

    const inputValue = screen.getByTestId(valueInput);
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputValue, '100');
    expect(inputValue).toHaveValue('100');
    userEvent.type(inputDescription, 'Aleatório');
    expect(inputDescription).toHaveValue('Aleatório');

    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    userEvent.click(buttonAddExpense);

    const buttonEdit = await screen.findByText('Editar');
    userEvent.click(buttonEdit);

    userEvent.clear(inputValue);
    userEvent.type(inputValue, '500');
    expect(inputValue).toHaveValue('500');
    userEvent.clear(inputDescription);
    userEvent.type(inputDescription, textDescription);
    expect(inputDescription).toHaveValue(textDescription);

    const editExpenseButton = await screen.findByText(/editar despesa/i);
    userEvent.click(editExpenseButton);

    // expect(await screen.findByText('100')).not.toBeInTheDocument();
    // expect(await screen.findByText('Aleatório')).not.toBeInTheDocument();

    await screen.findByText(textDescription);
    const category = await screen.findAllByText('Alimentação');
    expect(category).toHaveLength(2);
    const method = await screen.findAllByText('Dinheiro');
    expect(method).toHaveLength(2);
    await screen.findByText('500.00');
    await screen.findByText('Dólar Americano/Real Brasileiro');
    await screen.findByText('5.15');
    const value = await screen.findAllByText('2573.70');
    expect(value).toHaveLength(2);
    await screen.findByText('Real');

    expect(inputValue).toHaveValue('');
    expect(inputDescription).toHaveValue('');
  });

  it('Ao editar uma despesa, a mesma permanece na mesma posição na tabela de despesas (ordem)', async () => {
    const textDescription = 'Aleatório 1';

    const inputValue = screen.getByTestId(valueInput);
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputValue, '100');
    userEvent.type(inputDescription, textDescription);
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    userEvent.click(buttonAddExpense);
    await screen.findByText(/aleatório 1/i);

    userEvent.clear(inputValue);
    userEvent.type(inputValue, '200');
    userEvent.clear(inputDescription);
    userEvent.type(inputDescription, 'Aleatório 2');
    userEvent.click(buttonAddExpense);
    await screen.findByText(/aleatório 2/i);

    const buttonsEdit = await screen.findAllByText('Editar');
    userEvent.click(buttonsEdit[0]);

    userEvent.clear(inputValue);
    userEvent.type(inputValue, '300');
    userEvent.clear(inputDescription);
    userEvent.type(inputDescription, 'Aleatório 3');

    const editExpenseButton = await screen.findByText(/editar despesa/i);
    userEvent.click(editExpenseButton);

    const allDescriptionText = await screen.findAllByText(/Aleatório/i);
    expect(allDescriptionText[0]).toHaveTextContent(/aleatório 3/i);
    expect(allDescriptionText[1]).toHaveTextContent(/aleatório 2/i);
  });
});
