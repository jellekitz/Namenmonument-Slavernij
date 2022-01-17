import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/wistjedat" activeclassname="active">
            Wist je dat...
          </NavLink>
        </li>
        <li>
          <NavLink to="/persoonlijke-verhalen" activeclassname="active">
            Persoonlijke verhalen
          </NavLink>
        </li>
        <li>
          <NavLink to="/zoeken" activeclassname="active">
            Zoeken
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
