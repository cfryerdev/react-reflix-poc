import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";

export default ({ match, history }) => (
  <Fragment>
    SERIES DETAILS - {match.params.id}
  </Fragment>
);
