import React from "react";
import "./gamecard.scss";
import {  Link } from "react-router-dom";

/**
 * 
 * Affiche le jeux sur la page principale (carrousel des jeux les plus populaire)
 */

const GameCard = ({ game, type }) => {
  return (
    <Link className="game-card" to={`/game/${game.id}`} key={game.id}>
      <div className="badge">Popular</div>
      <div className="game-tumb">
        <img src={game.coverH ? game.coverH : ""} alt="" width="600" />
      </div>
      <div className="game-details">
        <h4>
          {game.nameGame}
        </h4>
        <div className="game-bottom-details">
          <div className="game-price">
            {(game.price != null) ? (game.price == 0 ? "Free" : (game.price)  + "€") : "????"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;