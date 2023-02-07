import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, saveExpenses, toggleExpenseEdit } from '../redux/actions';
import '../styles/walletForm.css';

class WalletForm extends Component {
  state = {
    expenses: [],
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.fieldValidation);
  };

  fetchExchangeRates = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    return data;
  };

  updateExpensesList = () => {
    const { globalExpensesList } = this.props;
    this.setState({ expenses: globalExpensesList });
  };

  addExpenseToLocalState = async () => {
    await this.updateExpensesList();
    const { id, expenses, value, currency, method,
      tag, description } = this.state;
    const exchangeRatesObj = await this.fetchExchangeRates();
    const expense = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: exchangeRatesObj };
    this.setState({
      expenses: [...expenses, expense],
      id: id + 1,
    }, () => {
      this.dispatchExpenses();
    });
    this.setState({
      value: '',
      description: '',
    });
  };

  dispatchExpenses = () => {
    const { expenses } = this.state;
    const { dispatch } = this.props;
    dispatch(saveExpenses(expenses));
  };

  editExpense = () => {
    const { expenses, value, currency, method, tag, description } = this.state;
    const { dispatch, expenseToEdit } = this.props;
    const currentExpenseExchangeInfo = expenses
      .find((expense) => expense.id === expenseToEdit)
      .exchangeRates;
    const filteredExpenses = expenses.filter((expense) => expense.id !== expenseToEdit);
    const editedInfo = {
      id: expenseToEdit,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: currentExpenseExchangeInfo,
    };
    const newExpenses = [...filteredExpenses, editedInfo]
      .sort((expenseA, expenseB) => expenseA.id - expenseB.id);
    dispatch(saveExpenses(newExpenses));
    dispatch(toggleExpenseEdit(false, 0));
    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const { currencies, enableEdit } = this.props;
    const { value, description } = this.state;

    return (
      <section className="inputExpense">
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="value"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((currencyName) => (
              <option key={ currencyName } value={ currencyName }>
                {currencyName}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento:
          <select
            id="method"
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        {enableEdit ? (
          <button type="button" onClick={ this.editExpense }>
            Editar despesa
          </button>
        ) : (
          <button type="submit" onClick={ this.addExpenseToLocalState }>
            Adicionar despesa
          </button>
        )}
      </section>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  const { currencies, expenses, editor, idToEdit } = wallet;
  return {
    currencies,
    globalExpensesList: expenses,
    enableEdit: editor,
    expenseToEdit: idToEdit,
  };
};

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  globalExpensesList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  enableEdit: PropTypes.bool.isRequired,
  expenseToEdit: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
