import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    let isSuperTrunfo = '';
    if (cardTrunfo) {
      isSuperTrunfo = (
        <div className="superTrunfo">
          <p
            data-testid="trunfo-card"
          >
            Super Trunfo
          </p>
          <img className="smallLogo" src="https://p20.zdusercontent.com/attachment/260238/EzaE2p10cvOcRwmxq9RJ9c1MP?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..BQwu4FbXuiYhrd9sJ0yMlA.CVdDAbxHvzYeTuYNBqlOHueMmmEupoRjn9K84YZ9ByM56TUYDUU2dyeDx6T19lqmJ1RdavTRbfANdWiYWcqyzSddPsHoN8uHu7yvx3SJJU0BZwflYj8m3RN902CEEmGVzJE2QO4oMuBI6R-WWqhR0iyk4ZZnsvJhE4-sTTZIxwPXX2xIoMgwoxHO1dcenamoHPjVaPUN6ojd8c8RQQAYKy2lsoD5lsnrrjG5fYB7K6BhdzQLkAqjOuOEVUcwsAxXosOxsZB-ZRen2-B-sc4eeQ.P73S-JH1DCC1a1d7fx-ZuA" alt="Super Trunfo Logo" />
        </div>
      );
    }

    return (
      <section className="card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">
          {'Potência: '}
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          {'Torque: '}
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          {'Aceleração: '}
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          {'Grau de Raridade: '}
          { cardRare }
        </p>
        {isSuperTrunfo}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
