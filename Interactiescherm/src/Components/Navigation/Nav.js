import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
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
            Namen van A-Z
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
