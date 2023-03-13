import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, filterByName, filterByRarity,
      filterTrunfo, filterFieldDisabled } = this.props;

    return (
      <div>
        <label htmlFor="nameFilter">
          {'Por Nome: '}
          <input
            data-testid="name-filter"
            id="nameFilter"
            name="filterByName"
            value={ filterByName }
            onChange={ onInputChange }
            disabled={ filterFieldDisabled }
          />
        </label>

        <label htmlFor="rarityFilter">
          {'Por Grau de Raridade: '}
          <select
            data-testid="rare-filter"
            id="rarityFilter"
            name="filterByRarity"
            value={ filterByRarity }
            onChange={ onInputChange }
            disabled={ filterFieldDisabled }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfoFilter">
          {'Apenas Super Trunfo: '}
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            id="trunfoFilter"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterFieldDisabled: PropTypes.bool.isRequired,
};

export default Filters;
