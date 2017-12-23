import { SET_EXPENSES, ADD_EXPENSE } from "../constants";

export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  payload: expenses
});

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  payload: expense
});
