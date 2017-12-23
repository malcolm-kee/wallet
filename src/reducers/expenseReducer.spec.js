import deepFreeze from "deep-freeze";

import expenseReducer from "./expenseReducer";

import { SET_EXPENSES, ADD_EXPENSE } from "../constants";

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
    byId: ["a", "b", "c"],
    byHash: {
      a: expenseA,
      b: expenseB,
      c: expenseC
    }
  };
  const action = {
    type: SET_EXPENSES,
    payload: [expenseA, expenseB, expenseC]
  };

  deepFreeze(oldState);

  expect(expenseReducer(oldState, action)).toEqual(finalState);
});

it("reduces addExpense with the expected structure", () => {
  const oldState = {
    byId: ["a", "c"],
    byHash: {
      a: expenseA,
      c: expenseC
    }
  };
  const finalState = {
    byId: ["a", "c", "b"],
    byHash: {
      a: expenseA,
      c: expenseC,
      b: expenseB
    }
  };
  const action = {
    type: ADD_EXPENSE,
    payload: expenseB
  };

  deepFreeze(oldState);

  expect(expenseReducer(oldState, action)).toEqual(finalState);
});
