import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';

export default ({ title, children }) => (
  <Fragment>
    <h6 style={{ marginLeft: 5 }}>
      {title || 'Untitled'}
    </h6>
    <div className="block-row focus-group" id={uuidv4()} style={{ marginBottom: 10 }}>
      { children }
    </div>
  </Fragment>
);
