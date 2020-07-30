import React, { Fragment } from "react";
import config from "../../config/application.json";
// import { NavLink } from "react-router-dom";

export default ({ match, history }) => (
  <Fragment>
    <h5>Search</h5>
    <div className="focus-group form-group">
      {
        config.hasVirtualKeyboard
        ? <div className="focus-item fake-input use-keyboard-input" tabIndex="0">
            Enter search text here
          </div>
      : <input className="focus-item form-control" placeholder="Enter search text here" />
      }
      
    </div>
  </Fragment>
);
