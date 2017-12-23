import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import AddExpenseForm from "./AddExpenseForm";

class AddExpenseFormContainer extends Component {
  state = {
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

    const expense = { ...this.state };

    this.props.addExpense(expense);

    this.props.history.push("/");
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
  addExpense(expense) {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense
    });
  }
});

export default withRouter(
  connect(null, mapDispatchToProps)(AddExpenseFormContainer)
);
