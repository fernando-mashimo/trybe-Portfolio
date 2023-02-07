import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/table.css';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <caption>Despesas Registradas</caption>
        <thead>
          <tr className="tableHeader">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <TableRow key={ expense.id } expense={ expense } />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  const { expenses } = wallet;
  return { expenses };
};

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default connect(mapStateToProps)(Table);
