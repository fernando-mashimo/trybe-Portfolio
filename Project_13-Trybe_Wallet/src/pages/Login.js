import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.fieldValidation);
  };

  fieldValidation = () => {
    const { email, password } = this.state;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const pwdMinLength = 6;
    if ((emailRegex.test(email) && password.length >= pwdMinLength)) {
      this.setState({ isDisabled: false });
    } else this.setState({ isDisabled: true });
  };

  logIn = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(inputEmail(email));
    history.push('/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <section className="login">
        <input
          type="email"
          data-testid="email-input"
          id="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ isDisabled }
          onClick={ () => this.logIn() }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
