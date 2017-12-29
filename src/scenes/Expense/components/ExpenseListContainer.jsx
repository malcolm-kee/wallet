import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteExpense } from "./../../../actions/expense";

import ExpenseList from "./ExpenseList";
import Loading from "../../../components/Loading";

class ExpenseListContainer extends Component {
  render() {
    const { expenses, dispatchDeleteExpense } = this.props;
    if (expenses) {
      return (
        <ExpenseList expenses={expenses} onRemoveItem={dispatchDeleteExpense} />
      );
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => {
  const expenseObj = state.expense;
  const expenses = Object.keys(expenseObj).map(id => expenseObj[id]);

  return {
    expenses
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchDeleteExpense(expense) {
    dispatch(deleteExpense(expense));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ExpenseListContainer
);
