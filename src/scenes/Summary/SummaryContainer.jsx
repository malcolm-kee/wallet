import React, { Component } from "react";
import { connect } from "react-redux";
import { addAll } from "./../../services/calculation/summary";
import { signIn, signOut } from "./../../actions/auth";
import { stoplistenForExpenses } from "./../../actions/expense";

import Summary from "./Summary";

class SummaryContainer extends Component {
  render() {
    const { totalExpense, auth, dispatchSignIn, dispatchSignOut } = this.props;
    return (
      <Summary
        amount={totalExpense}
        auth={auth}
        signIn={dispatchSignIn}
        signOut={dispatchSignOut}
      />
    );
  }
}

const mapStateToProps = state => {
  const auth = state.auth;
  const totalExpense = addAll(state.expense);
  return {
    auth,
    totalExpense
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchSignIn() {
    dispatch(signIn());
  },
  dispatchSignOut() {
    dispatch(signOut());
    dispatch(stoplistenForExpenses());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);
