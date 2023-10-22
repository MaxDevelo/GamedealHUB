import React, { useState, useEffect } from "react";
import "./gameinfo.scss";
import { useLoaderData, NavLink, useLocation } from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";
import METACRITIC from "../../assets/img/plateforms-logo/metacritic.png";
import parse from "html-react-parser";
import getPlateformLogo from "../../utils/getPlateformLogo";
import getMetacriticType from "../../utils/getMetacriticType";
const GameInfo = () => {
  let games = useLoaderData();
  let firstGame = games.data[0];
  return (
    <div className="game-container">
      <div className="game-info">
        <img src={firstGame.coverH} alt="PC" className="game-img" />
        <div className="plateforms">
          <img src={PC} alt="PC" className="plateform-img" width="50px" />
        </div>
        <hr className="sperator-box" />
        <div className="metacritic-note">
          <img src={METACRITIC} alt="PC" className="metacritic-img" />
          <p className={(firstGame.note == -1 || firstGame.note == null) ? "" : (getMetacriticType(firstGame.note) === "best") ? "good-note" : (getMetacriticType(firstGame.price) === "middle") ? "middle-note" : "low-note"}>{(firstGame.note == -1 || firstGame.note == null) ? "N/A" : firstGame.note}</p>
        </div>
      </div>
      <div className="game-details">
        <h2>{firstGame.name}</h2>
        <div className="others">
          <p className="date">Release Date: {firstGame.date.split("T")[0]}</p>
        </div>
        <hr className="sperator-box" />
        <p>{parse(firstGame.description)}</p>
        <hr className="sperator-box" />
        <div className="container-buy">
          <h2>Game Prices</h2>
          <div className="game-buy-link">
            <div className="game-link">
              <p className="column">Store</p>
              <p className="column">Price</p>
              <p className="column">Buy</p>
            </div>
            {games &&
              games.data.map((game_link) => (
                <div className="game-link">
                  <img src={getPlateformLogo(game_link.sellerName.toLowerCase())} width="60px" />
                  <p className="price"> { (game_link.price == 0 ) ? "Free" : "€ " + Math.floor((game_link.price / 100)*100)/100}</p>
                  <a href={game_link.url}>BUY NOW</a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
