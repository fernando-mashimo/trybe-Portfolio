import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Verificação de elementos do componente Header', () => {
  beforeEach(() => {
    const initialEntries = ['/carteira'];
    const initialState = { user: { email: 'teste@teste.gmail.com' } };
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });
  });

  it('Deve haver um campo exibindo o total de despesas cadastradas', () => {
    const totalExpensesField = screen.getByTestId('total-field');
    expect(totalExpensesField).toHaveTextContent(/0.00/i);
  });

  it('Deve haver um campo exibindo o nome da moeda corrente', () => {
    const currencyField = screen.getByTestId('header-currency-field');
    expect(currencyField).toHaveTextContent(/brl/i);
  });

  it('Deve haver um campo exibindo o email da pessoa usuária', () => {
    const emailField = screen.getByTestId('email-field');
    expect(emailField).toHaveTextContent('teste@teste.gmail.com');
  });

  it('Ao adicionar despesas, o valor total deve ser atualizado', async () => {
    const totalExpensesField = screen.getByTestId('total-field');
    expect(totalExpensesField).toHaveTextContent(/0.00/i);
    const inputValue = screen.getByLabelText(/valor:/i);
    userEvent.type(inputValue, '50');
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);
    userEvent.click(buttonAddExpense);

    // await screen.findAllByText('257.63');
  });
});
