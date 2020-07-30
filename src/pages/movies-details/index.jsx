import React from "react";
import { NavLink } from "react-router-dom";

export default ({ match, history }) => (
  <div className="container">
    <div style={{
      padding: '20px',
      height: 500,
      background: '#333',
      //backgroundImage: 'url(https://i.imgur.com/nshYKbd.jpg)'
    }}>
      <h4>Content Title ({match.params.id})</h4>
      <p>Content description here.</p>
    </div>
    <p className="pt-4 focus-group">
      <NavLink className="focus-item btn btn-success mr-1" to="/play-content/123456">
        Watch
      </NavLink>
      <button className="focus-item btn btn-secondary mr-1">Add to List</button>
      <button className="focus-item btn btn-secondary mr-1">
        <i className="fas fa-thumbs-up"></i>
      </button>
      <button className="focus-item btn btn-secondary mr-1">
        <i className="fas fa-thumbs-down"></i>
      </button>
    </p>
    <hr />
    <h5>Details</h5>
    <div className="row">
      <div className="col-4">
        <label>Cast</label>
        <ul>
          <li>John Travolta</li>
          <li>Hugh Jackman</li>
          <li>Halle Berry</li>
          <li>Don Cheadle</li>
          <li>Sam Shepard</li>
          <li>Vinnie Jones</li>
        </ul>
      </div>
      <div className="col-4">
        <label>Director & Writer</label>
        <ul>
          <li>Dominic Sena</li>
          <li>Skip Woods</li>
        </ul>
      </div>
      <div className="col-4">
        <div>Rating: R</div>
        <div>Violence, language and some sexuality/nudity</div>
      </div>
    </div>
  </div>
);
