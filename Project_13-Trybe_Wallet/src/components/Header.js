import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/header.css';

class Header extends Component {
  totalExpenses = () => {
    const { expenses } = this.props;
    const totalExpense = expenses.reduce((acc, curr) => acc
      + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask), 0);
    return totalExpense.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/6679/6679598.png" alt="Money Management Logo" />
        <h4 data-testid="total-field" id="totalExpense">
          {this.totalExpenses()}
        </h4>
        <h4 data-testid="header-currency-field" id="currency">
          Moeda Corrente: BRL
        </h4>
        <h4 data-testid="email-field" id="email">
          {email}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email, expenses });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
