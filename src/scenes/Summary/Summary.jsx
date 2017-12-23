import React from "react";

import AuthPanel from "./../../components/AuthPanel";

const Summary = ({ amount, auth, signIn, signOut }) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Total amount is RM {amount}</h1>
      </div>
      <AuthPanel auth={auth} signIn={signIn} signOut={signOut} />
    </div>
  );
};

export default Summary;
