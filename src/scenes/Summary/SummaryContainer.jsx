import React, { Component } from "react";
import { connect } from "react-redux";
import Decimal from "decimal.js-light";

import Summary from "./Summary";

class SummaryContainer extends Component {
  render() {
    return <Summary amount={this.props.totalExpense} />;
  }
}

const mapStateToProps = state => {
  const expenseObj = state.expense;
  const expenses = expenseObj.byId.map(id => expenseObj.byHash[id]);
  const totalExpense = expenses
    .reduce((total, expense) => {
      return total.plus(new Decimal(expense.amount));
    }, new Decimal(0.0))
    .toDecimalPlaces(2)
    .toString();
  return {
    totalExpense
  };
};

export default connect(mapStateToProps)(SummaryContainer);
