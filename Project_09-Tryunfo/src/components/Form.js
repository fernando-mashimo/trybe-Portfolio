import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let haveSuperTrunfo = '';
    if (hasTrunfo) {
      haveSuperTrunfo = (
        <p data-testid="trunfo-input">
          Você já tem um Super Trunfo em seu baralho
        </p>
      );
    } else {
      haveSuperTrunfo = (
        <label htmlFor="trunfoInput">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfoInput"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }

    return (
      <form onSubmit={ onSaveButtonClick } className="formFields">
        <label htmlFor="nameInput">
          Nome:
          <input
            data-testid="name-input"
            id="nameInput"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição:
          <textarea
            data-testid="description-input"
            id="descriptionInput"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attrib1Input">
          Potência:
          <input
            data-testid="attr1-input"
            type="number"
            id="attrib1Input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attrib2Input">
          Torque:
          <input
            data-testid="attr2-input"
            type="number"
            id="attrib2Input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attrib3Input">
          Aceleração:
          <input
            data-testid="attr3-input"
            type="number"
            id="attrib3Input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageInput">
          Imagem:
          <input
            data-testid="image-input"
            id="imageInput"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarityInput">
          Grau de Raridade
          <select
            data-testid="rare-input"
            id="rarityInput"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {haveSuperTrunfo}

        <button
          data-testid="save-button"
          type="submit"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
