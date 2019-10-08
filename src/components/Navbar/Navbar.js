import React from "react";
import { NavLink } from "react-router-dom";

//* Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="nav__item"
        to="/"
        exact
        activeClassName="nav__item--active"
      >
        Home
      </NavLink>
      <NavLink
        className="nav__item"
        to="/favs"
        exact
        activeClassName="nav__item--active"
      >
        Favs
      </NavLink>
    </nav>
  );
};

export default Navbar;
