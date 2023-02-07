import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Verificação de elementos e funcionalidades da tabela de despesas', () => {
  beforeEach(() => {
    const initialEntries = ['/carteira'];
    const initialState = {
      user: { email: 'teste@gmail.com' },
      wallet: {
        currencies: [],
        expenses: [],
        editor: false,
        idToEdit: 0,
      },
    };
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });
  });

  const valueInput = 'value-input';
  const descriptionInput = 'description-input';

  it('Ao fazer o input de uma despesa e apertar o botão, a despesa é renderizada na tabela', async () => {
    const inputValue = screen.getByTestId(valueInput);
    userEvent.type(inputValue, '50');
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputDescription, 'Teste Xablau1');
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    expect(buttonAddExpense).toBeInTheDocument();
    userEvent.click(buttonAddExpense);

    await screen.findByText('50.00');
    await screen.findByText(/teste xablau1/i);
    await screen.findByText(/Dólar Americano/i);
    // await screen.findByText(/5.15/i);
    // await screen.findAllByText(/257.63/i);
    await screen.findAllByText(/real/i);
    const buttonsList = await screen.findAllByRole('button');
    expect(buttonsList).toHaveLength(3);
    expect(buttonsList[1]).toHaveTextContent(/editar/i);
    expect(buttonsList[2]).toHaveTextContent(/excluir/i);
  });

  it('Ao clicar no botão de "Excluir", a despesa é excluída da tabela', async () => {
    const inputValue = screen.getByTestId(valueInput);
    userEvent.type(inputValue, '50');
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputDescription, 'Teste Xablau2');
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    userEvent.click(buttonAddExpense);

    await screen.findByText('50.00');
    await screen.findByText(/teste xablau2/i);

    const buttonDelete = await screen.findByText('Excluir');
    userEvent.click(buttonDelete);
    const valueText = await screen.findByText('0.00');
    expect(valueText).toBeInTheDocument();
  });

  it('Ao clicar no botão "Editar", é habilitado um botão "Editar despesa" no Header', async () => {
    const inputValue = screen.getByTestId(valueInput);
    userEvent.type(inputValue, '50');
    const inputDescription = screen.getByTestId(descriptionInput);
    userEvent.type(inputDescription, 'Teste Xablau3');
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    userEvent.click(buttonAddExpense);

    const buttonEdit = await screen.findByText(/Editar/i);
    expect(buttonEdit).toBeInTheDocument();
    userEvent.click(buttonEdit);
    await screen.findByTestId('edit-btn');
  });
});
