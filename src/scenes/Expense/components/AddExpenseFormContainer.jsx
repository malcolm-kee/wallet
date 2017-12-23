import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ulid } from "ulid";

import { addExpense } from "./../../../actions/expense";

import AddExpenseForm from "./AddExpenseForm";

class AddExpenseFormContainer extends Component {
  state = {
    id: ulid(),
    category: "",
    amount: 0.0,
    date: moment().format("YYYY-MM-DD")
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { dispatchAddExpense, history } = this.props;

    const expense = { ...this.state };

    dispatchAddExpense(expense);

    history.push("/");
  };

  render() {
    return (
      <AddExpenseForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchAddExpense(expense) {
    dispatch(addExpense(expense));
  }
});

export default withRouter(
  connect(null, mapDispatchToProps)(AddExpenseFormContainer)
);
