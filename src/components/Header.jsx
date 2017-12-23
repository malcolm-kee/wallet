import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-expand navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Wallet
        </Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/expense/add" className="btn btn-secondary">
            Add
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
