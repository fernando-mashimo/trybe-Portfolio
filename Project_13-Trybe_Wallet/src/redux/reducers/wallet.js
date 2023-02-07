import { DISPLAY_CURRENCIES, SAVE_EXPENSES, TOGGLE_EXPENSE_EDIT } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case DISPLAY_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case TOGGLE_EXPENSE_EDIT:
    return {
      ...state,
      editor: action.payload[0],
      idToEdit: action.payload[1],
    };
  default:
    return state;
  }
};

export default wallet;
