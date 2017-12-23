import deepFreeze from "deep-freeze";

import expenseReducer from "./expenseReducer";

import { setExpenses, addExpense } from "./../actions/expense";

const expenseA = {
  id: "a",
  category: "Eat",
  amount: 2.22
};

const expenseB = {
  id: "b",
  category: "Transportation",
  amount: 20.0
};

const expenseC = {
  id: "c",
  category: "Love",
  amount: 200.0
};

it("reduces setExpenses with the expected structure", () => {
  const oldState = {};
  const finalState = {
    a: expenseA,
    b: expenseB,
    c: expenseC
  };
  const action = setExpenses([expenseA, expenseB, expenseC]);

  deepFreeze(oldState);

  expect(expenseReducer(oldState, action)).toEqual(finalState);
});

it("reduces addExpense with the expected structure", () => {
  const oldState = {
    a: expenseA,
    c: expenseC
  };
  const finalState = {
    a: expenseA,
    c: expenseC,
    b: expenseB
  };
  const action = addExpense(expenseB);

  deepFreeze(oldState);

  expect(expenseReducer(oldState, action)).toEqual(finalState);
});
