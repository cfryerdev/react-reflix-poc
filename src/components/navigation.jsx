import React from "react";
import { NavLink } from "react-router-dom";
import config from "../config/application.json";

export default () => (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <span style={{ color: '#8c65c7', fontWeight: 700 }}>RE</span>FLIX
      </NavLink>
      <span className="nav-group focus-group">
        <NavLink to="/" className="mr-2 focus-item" id="default-focus">
          <span className="nav-item">Home</span>
        </NavLink>
        <NavLink to="/series" className="mr-2 focus-item">
          <span className="nav-item">Series</span>
        </NavLink>
        <NavLink to="/movies" className="mr-2 focus-item">
          <span className="nav-item">Movies</span>
        </NavLink>
        { 
          config.showSearch 
            ? <NavLink to="/search" className="mr-2 focus-item">
                <span className="nav-item">
                  <i className="fas fa-search fa-lg"></i>
                </span>
              </NavLink>
            : null
        }
        <NavLink to="/login" className="mr-2 focus-item">
          <span className="nav-item">
            <i className="fas fa-user-circle fa-lg"></i>
          </span>
        </NavLink>
      </span>
    </nav>
);
