import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <NavItem>
          <Link to="/expense/add" className="btn btn-success">
            Add Expense
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
