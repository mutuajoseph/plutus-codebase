import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink exact="true" to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact="true" to="/quiz" className="nav-link" activeClassName="active">
          Quiz
        </NavLink>
        <NavLink exact="true" to="/products" className="nav-link" activeClassName="active">
          Products
        </NavLink>
        <NavLink exact="true" to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
