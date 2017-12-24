import React from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = props => (
  <Navbar fixedTop inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Wallet</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/expense/add">
          <NavItem>
            <Button bsStyle="success">Add Expense</Button>
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
