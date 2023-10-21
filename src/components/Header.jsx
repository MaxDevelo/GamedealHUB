import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'
import './header.scss'

const Header = () => {
  return (
    <header className="header-page">
      <div>
        <Link to="/">
          <img src={logo} alt="logo website" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
