import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deck, filterByName, filterByRarity,
      filterTrunfo, deleteCard } = this.props;

    let filteredCards = [];

    if (filterTrunfo) {
      filteredCards = deck.filter((card) => card.cardTrunfo === filterTrunfo);
    } else {
      let cardsFilteredByRarity = [];
      if (filterByRarity === 'todas' || filterByRarity === '') {
        cardsFilteredByRarity = deck;
      } else {
        cardsFilteredByRarity = deck
          .filter((card) => card.cardRare === filterByRarity);
      }

      filteredCards = cardsFilteredByRarity
        .filter((card) => card.cardName.includes(filterByName));
    }

    const cardsToRender = filteredCards;

    return (
      <>
        { cardsToRender.map((card) => (
          <div key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardImage={ card.cardImage }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => deleteCard(card.cardName, card.cardTrunfo) }
            >
              Excluir
            </button>
          </div>
        ))}
      </>
    );
  }
}

Deck.propTypes = {
  filterByName: PropTypes.string.isRequired,
  filterByRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
  deck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Deck;
