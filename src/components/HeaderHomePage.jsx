import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import GameCard from "./game-card/GameCard";
import { Box } from "@mui/material";

import "./headerhome.scss";

const HeaderHomePage = () => {
  return (
    <header className="header-homepage">
      <nav>
        <ul>
          <div>
            <Link to="/">
              <img src={logo} alt="logo website" className="logo" />
            </Link>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="last-games-container">
        <Box sx={{ display: 'flex', flexWrap: "wrap" }}>
          <GameCard />
          <GameCard />
          <GameCard />
        </Box>
      </div>
    </header>
  );
};

export default HeaderHomePage;
