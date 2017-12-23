import { SET_EXPENSES, ADD_EXPENSE } from "../constants";

const DEFAULT_STATE = {
  byId: [],
  byHash: {}
};

const setExpenses = (state, action) => {
  const expenses = action.payload;

  return {
    byId: expenses.map(expense => expense.id),
    byHash: expenses.reduce((hashObj, expense) => {
      return { ...hashObj, [expense.id]: expense };
    }, {})
  };
};

const addExpense = (state, action) => {
  const expense = action.payload;

  return {
    byId: [...state.byId, expense.id],
    byHash: {
      ...state.byHash,
      [expense.id]: expense
    }
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
