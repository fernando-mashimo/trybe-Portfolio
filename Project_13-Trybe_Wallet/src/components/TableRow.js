import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses, toggleExpenseEdit } from '../redux/actions';
import '../styles/table.css';

class TableRow extends Component {
  state = {
    localExpensesState: [],
  };

  componentDidMount() {
    this.updateLocalExpenseState();
  }

  updateLocalExpenseState = () => {
    const { globalExpensesState } = this.props;
    this.setState({ localExpensesState: globalExpensesState });
  };

  dispatchNewExpensesList = () => {
    const { localExpensesState } = this.state;
    const { dispatch } = this.props;
    dispatch(saveExpenses(localExpensesState));
  };

  removeExpense = async (expenseId) => {
    await this.updateLocalExpenseState();
    const { localExpensesState } = this.state;
    this.setState({
      localExpensesState: localExpensesState
        .filter((expense) => expense.id !== expenseId),
    }, () => {
      this.dispatchNewExpensesList();
    });
  };

  enableEditExpense = (expenseId) => {
    const { dispatch } = this.props;
    dispatch(toggleExpenseEdit(true, expenseId));
  };

  render() {
    const { expense } = this.props;
    return (
      <tr className="tableBody">
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{Number(expense.value).toFixed(2)}</td>
        <td>{expense.exchangeRates[expense.currency].name}</td>
        <td>
          {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
        </td>
        <td>
          {(
            expense.value * expense.exchangeRates[expense.currency].ask
          ).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ () => this.enableEditExpense(expense.id) }
          >
            Editar
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.removeExpense(expense.id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({}),
  }).isRequired,
  globalExpensesState: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => {
  const { expenses } = wallet;
  return { globalExpensesState: expenses };
};

export default connect(mapStateToProps)(TableRow);
