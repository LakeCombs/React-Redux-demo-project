import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="brand-logo">Poke' Times</a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
