import React from "react";
import { Link } from "react-router-dom";
import { Grid, Jumbotron } from "react-bootstrap";

const Landing = () => (
  <Grid>
    <Jumbotron>
      <h1>Hello! Welcome to Wallet!</h1>
      <p>
        This app is created using React as frontend and Firebase as backend.
      </p>
      <p>To explore more, login using your google account!</p>
      <p>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </p>
    </Jumbotron>
  </Grid>
);

export default Landing;
