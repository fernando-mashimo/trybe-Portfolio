import React from 'react';
import './App.css';
import Card from './components/Card';
import Deck from './components/Deck';
import Filters from './components/Filters';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    deck: [],
    filterByName: '',
    filterByRarity: '',
    filterTrunfo: false,
    filterFieldDisabled: false,
  };

  enableSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxAttrValue = 90;
    const maxAttrSum = 210;

    const textInputValidation = cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0;

    const attrValueValid = Number(cardAttr1) <= maxAttrValue
      && Number(cardAttr2) <= maxAttrValue
      && Number(cardAttr3) <= maxAttrValue;

    const attrMaxSumValid = Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3) <= maxAttrSum;

    const attrValuePositive = cardAttr1 >= 0
      && cardAttr2 >= 0
    && cardAttr3 >= 0;

    this.setState({
      isSaveButtonDisabled: !(textInputValidation && attrValueValid
        && attrMaxSumValid && attrValuePositive),
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.enableSaveButton);

    if (name === 'filterTrunfo') {
      this.setState({
        filterFieldDisabled: target.checked,
      });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newDeck = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState(({ deck }) => ({
      deck: [...deck, newDeck],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      isSaveButtonDisabled: true,
    }), this.checkHaveTrunfo(), this.resetCardTrunfo());
  };

  checkHaveTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: cardTrunfo,
      });
    }
  };

  resetCardTrunfo = () => {
    this.setState({
      cardTrunfo: false,
    });
  };

  deleteCard = (name, isTrunfo) => {
    const { deck } = this.state;
    const updatedDeck = deck.filter((card) => card.cardName !== name);

    this.setState({
      deck: updatedDeck,
    });

    if (isTrunfo) {
      this.setState({
        hasTrunfo: !isTrunfo,
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Super Tryunfo</h1>
          <h2>A Tríade Alemã</h2>
        </header>

        <section className="newCard">
          <section className="form">
            <h3>Adicione uma Nova Carta</h3>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>

          <section className="preview">
            <h3>Preview da Nova Carta</h3>
            <section>
              <Card { ...this.state } />
            </section>
          </section>
        </section>

        <h2>Deck de Cartas</h2>

        <section className="deck">
          <section className="allFilters">
            <h3>Filtros de Cartas</h3>
            <Filters
              { ...this.state }
              onInputChange={ this.onInputChange }
            />
          </section>

          <section className="deckCards">
            <h3>Cartas do Deck</h3>
            <div>
              <Deck
                { ...this.state }
                deleteCard={ this.deleteCard }
              />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
