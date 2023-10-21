import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./header.scss";


const Header = () => {
  const games = useLoaderData();
  return (
    <header className="header-category">
      <nav>
        <ul>
          <div>
            <Link to="/">
              <img src={logo} alt="logo website" className="logo" />
            </Link>
          </div>
          <li>
            <Link to="/category">Catalogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
