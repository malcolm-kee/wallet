import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { ANONYMOUS, SIGNED_IN, AWAITING_AUTH_RESPONSE } from "../constants";

import { setRedirectUrl } from "../actions/auth";

import Loading from "./Loading";
import SummaryContainer from "../scenes/Summary/SummaryContainer";
import AddExpenseFormContainer from "../scenes/Expense/components/AddExpenseFormContainer";

class EnsureLoggedInContainer extends Component {
  componentDidMount() {
    const {
      authStatus,
      currentURL,
      dispatchSetRedirectUrl,
      history
    } = this.props;

    if (authStatus === ANONYMOUS) {
      dispatchSetRedirectUrl(currentURL);
      history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      authStatus,
      currentURL,
      dispatchSetRedirectUrl,
      history
    } = nextProps;

    if (authStatus === ANONYMOUS) {
      dispatchSetRedirectUrl(currentURL);
      history.push("/login");
    }
  }

  render() {
    const { authStatus } = this.props;
    if (authStatus === SIGNED_IN) {
      return (
        <Switch>
          <Route exact path="/overview" component={SummaryContainer} />
          <Route
            exact
            path="/expense/add"
            component={AddExpenseFormContainer}
          />
        </Switch>
      );
    } else if (authStatus === AWAITING_AUTH_RESPONSE) {
      return <Loading />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const auth = state.auth;

  return {
    authStatus: auth.status,
    currentURL: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchSetRedirectUrl(url) {
    dispatch(setRedirectUrl(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EnsureLoggedInContainer
);
