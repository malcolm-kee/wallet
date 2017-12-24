import React, { Component } from "react";
import { connect } from "react-redux";

import {
  ANONYMOUS,
  AWAITING_AUTH_RESPONSE,
  SIGNED_IN
} from "../../../constants";

import { signIn, clearRedirectUrl } from "./../../../actions/auth";

import Login from "./Login";
import Loading from "../../../components/Loading";

class LoginContainer extends Component {
  componentDidMount() {
    const {
      authStatus,
      redirectUrl,
      dispatchClearRedirectUrl,
      history
    } = this.props;

    if (authStatus === SIGNED_IN) {
      if (redirectUrl) {
        dispatchClearRedirectUrl();
        history.push(redirectUrl);
      } else {
        history.push("/");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      authStatus,
      redirectUrl,
      dispatchClearRedirectUrl,
      history
    } = nextProps;

    if (authStatus === SIGNED_IN) {
      if (redirectUrl) {
        dispatchClearRedirectUrl();
        history.push(redirectUrl);
      } else {
        history.push("/");
      }
    }
  }

  render() {
    const { authStatus, dispatchSignIn } = this.props;
    if (authStatus === ANONYMOUS) {
      return <Login handleClick={dispatchSignIn} />;
    } else if (authStatus === AWAITING_AUTH_RESPONSE) {
      return <Loading />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  const auth = state.auth;

  return {
    authStatus: auth.status,
    redirectUrl: auth.redirectUrl
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchSignIn() {
    dispatch(signIn());
  },
  dispatchClearRedirectUrl() {
    dispatch(clearRedirectUrl());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
