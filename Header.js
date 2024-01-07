import React from "react";
import { Link } from "react-router-dom";
import logo from './logo-dlk.png';
// import { SideNav, SideNavItem, Button } from "react-materialize";

function Header() {
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <div className="bg-dark brand-logo title">
          <img src={logo} width={250} alt="Logo" /> <span>Task Tracker</span>
          </div>
          <ul className="right hide-on-med-and-down title">
            <li>
              <Link to="/login" className="waves-effect lime accent-2 black-text waves-dark btn">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
