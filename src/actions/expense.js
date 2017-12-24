import { SET_EXPENSES, ADD_EXPENSE, CLEAR_EXPENSES } from "../constants";

import { database } from "./../config/firebase";

const expensesRef = database.ref("expenses");
let userExpensesRef;

export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  payload: expenses
});

export const clearExpenses = () => ({
  type: CLEAR_EXPENSES
});

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  payload: expense
});

export const createExpense = expense => dispatch => {
  userExpensesRef.push(expense);
};

export const listenForExpenses = uid => dispatch => {
  userExpensesRef = expensesRef.child(uid);

  userExpensesRef.on("child_added", snapshot => {
    dispatch(addExpense(snapshot.val()));
  });
};

export const stoplistenForExpenses = () => dispatch => {
  userExpensesRef.off("child_added");
  userExpensesRef = undefined;
  dispatch(clearExpenses());
};
