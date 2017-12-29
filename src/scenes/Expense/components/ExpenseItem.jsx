import React from "react";
import { Button, Col, ListGroupItem, Row } from "react-bootstrap";

const ExpenseItem = ({ date, category, amount, onClick }) => (
  <ListGroupItem>
    <Row>
      <Col sm={8}>
        <h1>RM {amount}</h1>
        for {category} on {date}
      </Col>
      <Col sm={4}>
        <Button onClick={onClick} bsStyle="danger">
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);

export default ExpenseItem;
