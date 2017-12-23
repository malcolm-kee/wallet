import { addAll } from "./summary";

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

it("add expenses correctly", () => {
  const expenses = {
    a: expenseA,
    b: expenseB,
    c: expenseC
  };

  expect(addAll(expenses)).toEqual("222.22");
});
