import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    // <Router>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Router> */}
          <Link to="/" className="navbar-brand auto textToggle">
            {props.siteTitle}
          </Link>
          {/* </Router> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Router> */}
                <Link
                  to="/"
                  className="nav-link active textToggle"
                  aria-current="page"
                >
                  Home
                </Link>
                {/* </Router> */}
              </li>
              <li className="nav-item">
                {/* <Router> */}
                <Link to={"/about"} className="nav-link textToggle">
                  {props.aboutText}
                </Link>
                {/* </Router> */}
              </li>
            </ul>

            <div className="row row-cols-auto">
              <div className="col mx">
                {/* Red Mode */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => props.colorMode("red")}
                >
                  Red
                </button>
              </div>

              <div className="col mx">
                {/* Green Mode */}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => props.colorMode("green")}
                >
                  Green
                </button>
              </div>

              <div className="col">
                {/* Yellow Mode */}
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => props.colorMode("yellow")}
                >
                  Yellow
                </button>
              </div>

              {/* Dark Mode Switch */}
              <div className="form-check form-switch col mx">
                <input
                  className="form-check-input"
                  type="checkbox"
                  // role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className="form-check-label textToggle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode} Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    // {/* </Router> */}
  );
}

// declaring the proptypes using data types
Navbar.prototype = {
  siteTitle: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Website Title Here",
  aboutText: "About Text Here",
};

export default Navbar;
