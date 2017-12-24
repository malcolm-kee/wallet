import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { ANONYMOUS, SIGNED_IN } from "../constants";

import Loading from "./Loading";

const Home = ({ authStatus }) => {
  if (authStatus === ANONYMOUS) {
    return <Redirect to="/landing" />;
  } else if (authStatus === SIGNED_IN) {
    return <Redirect to="/overview" />;
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const auth = state.auth;

  return {
    authStatus: auth.status
  };
};

export default connect(mapStateToProps)(Home);
