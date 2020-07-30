import React from "react";
import { NavLink } from "react-router-dom";

export default ({ id, type, title, image }) => (
  <NavLink 
    className="block-item focus-item" 
    to={ type === "Movie" ? `/movies/${id}` : `/series/${id}`} 
    style={{ backgroundImage: `url(${image})` }}
  >
    <span className="block-text">
      {title}
    </span>
  </NavLink>
);