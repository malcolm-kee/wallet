import React from "react";

import { AWAITING_AUTH_RESPONSE, SIGNED_IN } from "./../constants";

import Loading from "./Loading";
import CurrentUser from "./CurrentUser";

const AuthPanel = ({ auth, signIn, signOut }) => {
  switch (auth.status) {
    case SIGNED_IN:
      return <CurrentUser auth={auth} signOut={signOut} />;

    case AWAITING_AUTH_RESPONSE:
      return <Loading />;

    default:
      return (
        <button className="btn btn-primary" onClick={signIn}>
          Sign In
        </button>
      );
  }
};

export default AuthPanel;
