import React from "react";

export default () => (
   <div style={{
     zIndex: 5000,
     width: '100%',
     height: '100%',
     padding: 60,
     background: '#000',
     textAlign: 'center',
     position: 'fixed',
     top: 73,
     left: 0,
     opacity: '0.9'
   }}>
    <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
  </div>
);
