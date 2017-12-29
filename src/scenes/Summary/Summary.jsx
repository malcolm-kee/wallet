import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import AuthPanel from "./../../components/AuthPanel";

const Summary = ({ amount, auth, signIn, signOut }) => {
  return (
    <div className="container">
      <Jumbotron>
        <h1>Total amount is RM {amount}</h1>
        <p>
          <Link to="/expense/all" className="btn btn-primary">
            View Details
          </Link>
        </p>
      </Jumbotron>
      <AuthPanel auth={auth} signIn={signIn} signOut={signOut} />
    </div>
  );
};

export default Summary;
