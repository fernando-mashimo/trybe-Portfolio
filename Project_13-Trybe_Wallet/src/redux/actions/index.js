export const USER_EMAIL = 'USER_EMAIL';
export const DISPLAY_CURRENCIES = 'DISPLAY_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const TOGGLE_EXPENSE_EDIT = 'TOGGLE_EXPENSE_EDIT';

export const inputEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

const displayCurrencies = (currenciesList) => ({
  type: DISPLAY_CURRENCIES,
  payload: currenciesList,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const rawList = Object.values(data);
  const unwantedCodeIn = 'BRLT';
  const currenciesList = rawList
    .filter((currency) => currency.codein !== unwantedCodeIn)
    .map((currency) => currency.code);
  dispatch(displayCurrencies(currenciesList));
};

export const saveExpenses = (expensesArray) => ({
  type: SAVE_EXPENSES,
  payload: expensesArray,
});

export const toggleExpenseEdit = (boolean, expenseId) => ({
  type: TOGGLE_EXPENSE_EDIT,
  payload: [boolean, expenseId],
});
