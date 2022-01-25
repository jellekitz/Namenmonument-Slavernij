import React from "react";

function StoryTile({ children }) {
  return (
    <li>
      <h2>{children}</h2>
      <p>In 1628 ingeschreven in Batavia</p>
    </li>
  );
}

export default StoryTile;
