import React from "react";

const Summary = props => (
  <div className="container">
    <div className="jumbotron">
      <h1>Total amount is RM {props.amount}</h1>
    </div>
  </div>
);

export default Summary;
