import React from "react";
import { Link } from "react-router-dom";

//* Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav__item nav__item--active">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
