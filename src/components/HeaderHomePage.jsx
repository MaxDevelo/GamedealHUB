import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import logo from "../assets/img/logo.png";
import GameCard from "./game-card/GameCard";
import { Box } from "@mui/material";

import "./headerhome.scss";


const HeaderHomePage = () => {
  const games = useLoaderData();
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
        {games && (
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {games[0] &&
              games[0].data.slice(0, 3).map((game) => (
                <GameCard game={game} type={games[2].type} />
              ))}
          </Box>
        )}
      </div>
    </header>
  );
};

export default HeaderHomePage;
