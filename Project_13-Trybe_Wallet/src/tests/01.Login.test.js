import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Verificação de elementos e funcionalidades da página de Login', () => {
  beforeEach(() => renderWithRouterAndRedux(<App />));

  const emailInput = 'email-input';
  const passwordInput = 'password-input';

  it('Campos para digitação de email, senha e botão "Entrar" são renderizados', () => {
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const enterBtn = screen.getByText(/entrar/i);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(enterBtn).toBeInTheDocument();
  });

  it('É possível digitar nos campos de email e senha', () => {
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);

    userEvent.type(inputEmail, 'TesteEmail');
    userEvent.type(inputPassword, 'TestePassword');

    expect(inputEmail).toHaveValue('TesteEmail');
    expect(inputPassword).toHaveValue('TestePassword');
  });

  it('É feita uma validação do campo Email para habilitar o botão "Entrar"', () => {
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const enterBtn = screen.getByText(/entrar/i);

    userEvent.type(inputEmail, 'TesteEmail');
    userEvent.type(inputPassword, '123456');
    expect(inputEmail).toHaveValue('TesteEmail');
    expect(enterBtn.disabled).toBe(true);

    userEvent.type(inputEmail, 'teste2@gmail.com');
    expect(enterBtn.disabled).toBe(false);
  });

  it('É feita uma validação do campo Password para habilitar o botão "Entrar"', () => {
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const enterBtn = screen.getByText(/entrar/i);

    userEvent.type(inputEmail, 'teste3@gmail.com');
    userEvent.type(inputPassword, '12345');
    expect(inputPassword).toHaveValue('12345');
    expect(enterBtn.disabled).toBe(true);

    userEvent.type(inputPassword, '123456');
    expect(enterBtn.disabled).toBe(false);
  });

  it('Ao digitar dados válidos e clicar no botão, renderiza a tela da carteira', () => {
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const enterBtn = screen.getByText(/entrar/i);

    userEvent.type(inputEmail, 'teste3@gmail.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(enterBtn);

    const totalExpensesField = screen.getByTestId('total-field');
    const currencyNameField = screen.getByTestId('header-currency-field');
    const emailField = screen.getByTestId('email-field');
    expect(totalExpensesField).toBeInTheDocument();
    expect(currencyNameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
  });
});
