import React, { Component } from "react";
import { connect } from "react-redux";
import { addAll } from "./../../services/calculation/summary";

import Summary from "./Summary";

class SummaryContainer extends Component {
  render() {
    return <Summary amount={this.props.totalExpense} />;
  }
}

const mapStateToProps = state => {
  const totalExpense = addAll(state.expense);
  return {
    totalExpense
  };
};

export default connect(mapStateToProps)(SummaryContainer);
