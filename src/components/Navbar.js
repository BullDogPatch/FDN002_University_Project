import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            FDN002
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/degree-subject"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Degree Subject
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/useCases"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Amazing Use Cases
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/technical-challenges"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Technical Challenges
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
