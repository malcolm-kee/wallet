import React from "react";
import { Alert, Button, Col, Grid, Panel, Row } from "react-bootstrap";

const Login = ({ errorMsg, handleClick, handleClickFacebook }) => {
  return (
    <Grid>
      <Row>
        <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
          <Panel header="Login">
            {errorMsg && <Alert bsStyle="danger">{errorMsg}</Alert>}
            <Button onClick={handleClick} bsStyle="primary" block>
              Login with Google
            </Button>
            <Button onClick={handleClickFacebook} bsStyle="primary" block>
              Login with Facebook
            </Button>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default Login;
