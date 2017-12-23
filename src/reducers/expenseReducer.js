import { SET_EXPENSES, ADD_EXPENSE } from "../constants";

const DEFAULT_STATE = {};

const setExpenses = (state, action) => {
  const expenses = action.payload;

  return expenses.reduce((hashObj, expense) => {
    return { ...hashObj, [expense.id]: expense };
  }, {});
};

const addExpense = (state, action) => {
  const expense = action.payload;

  return {
    ...state,
    [expense.id]: expense
  };
};

const expenseReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_EXPENSES:
      return setExpenses(state, action);
    case ADD_EXPENSE:
      return addExpense(state, action);

    default:
      return state;
  }
};

export default expenseReducer;
