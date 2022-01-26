import React from "react";
import { NavLink } from "react-router-dom";

function StoryTile({ children }) {
  return (
    <li>
      <NavLink to="/verhaal-maria" activeclassname="active">
        <h2>{children}</h2>
        <p>In 1628 ingeschreven in Batavia</p>
      </NavLink>
    </li>
  );
}

export default StoryTile;
