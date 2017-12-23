import React, { Component } from "react";

import AddExpenseForm from "./AddExpenseForm";

class AddExpenseFormContainer extends Component {
  state = {
    category: "",
    amount: 0.0
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return <AddExpenseForm onChange={this.handleChange} {...this.state} />;
  }
}

export default AddExpenseFormContainer;
