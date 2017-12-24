import React from "react";
import { Button, Col, Grid, Panel, Row } from "react-bootstrap";

const Login = ({ handleClick }) => {
  return (
    <Grid>
      <Row>
        <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
          <Panel header="Login">
            <Button onClick={handleClick} bsStyle="primary" block>
              Login with Google
            </Button>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default Login;
