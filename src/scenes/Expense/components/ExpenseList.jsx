import React from "react";
import { ListGroupItem } from "react-bootstrap";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onRemoveItem }) => (
  <ListGroupItem>
    {expenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        onClick={() => onRemoveItem(expense)}
        {...expense}
      />
    ))}
  </ListGroupItem>
);

export default ExpenseList;
