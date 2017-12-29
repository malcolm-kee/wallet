import {
  SET_EXPENSES,
  ADD_EXPENSE,
  CLEAR_EXPENSES,
  REMOVE_EXPENSE
} from "../constants";

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

export const removeExpense = expense => ({
  type: REMOVE_EXPENSE,
  payload: expense
});

export const createExpense = expense => dispatch => {
  userExpensesRef.push(expense);
};

export const deleteExpense = expense => dispatch => {
  const id = expense.id;
  userExpensesRef.child(id).remove();
};

export const listenForExpenses = uid => dispatch => {
  userExpensesRef = expensesRef.child(uid);

  userExpensesRef.on("child_added", snapshot => {
    const expense = { ...snapshot.val(), id: snapshot.key };
    dispatch(addExpense(expense));
  });

  userExpensesRef.on("child_removed", snapshot => {
    const expense = { ...snapshot.val(), id: snapshot.key };
    dispatch(removeExpense(expense));
  });
};

export const stoplistenForExpenses = () => dispatch => {
  if (userExpensesRef) {
    userExpensesRef.off("child_added");
    userExpensesRef.off("child_removed");
    userExpensesRef = undefined;
  }
  dispatch(clearExpenses());
};
