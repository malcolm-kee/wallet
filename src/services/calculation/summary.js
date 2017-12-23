import Decimal from "decimal.js-light";

export const addAll = expenses =>
  Object.keys(expenses)
    .map(id => expenses[id])
    .reduce((total, expense) => {
      return total.plus(new Decimal(expense.amount));
    }, new Decimal(0))
    .toDecimalPlaces(2)
    .toString();
