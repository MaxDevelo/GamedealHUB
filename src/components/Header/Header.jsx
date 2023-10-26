import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import bg from "@/assets/img/bg.jpg";
import "./header.scss";
import GameCard from "../GameCard/GameCard";
import { Box } from "@mui/material";

const Header = ({ type }) => {
  const games = useLoaderData();
  let styles  = {};
  if(games && games[0].data[0]) {
    styles = {
      backgroundImage: "linear-gradient(to bottom,rgba(245, 246, 252, 0),#101924) ,url('" + games[0].data[0].coverH + "')",
    }
  } else {
    styles = {
      backgroundImage: "linear-gradient(to bottom,rgba(245, 246, 252, 0),#101924 ),url('" + bg + "')",
    }
  }
  return (
    <header style={styles}>
     <h1 class="OfficialStoresBar_officialStores__5F9Vt">Compares game prices from official stores only</h1>
      <nav style={{ backgrounColor: "linear-gradient(to top,rgba(245, 246, 252, 0),#101924a1)"}}>
        <ul>
          <div>
            <Link to="/">
              <img src={logo} alt="logo website" className="logo" width="200px" />
            </Link>
          </div>
          <li>
            <Link to="/category/most-recent">Catalogs</Link>
          </li>
        </ul>
      </nav>
      {
        type === "home" && 
        <div className="last-games-container">
        {(games) && (
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {games[0] &&
              games[0].data.slice(0, 3).map((game) => (
                <GameCard game={game} type={games[2].type} />
              ))}
          </Box>
        )}
      </div>
      }
    </header>
  );
};

export default Header;
