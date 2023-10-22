import React from "react";
import "./gamecard.scss";
import {  Link } from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";
import getPlateformLogo from "../../utils/getPlateformLogo";

const GameCard = ({ game, type }) => {
  return (
    <Link class="game-card" to={`/games/${game.id}`}>
      <div class="badge">{type}</div>
      <div class="game-tumb">
        <img src={game.coverH} alt="" width="600" />
      </div>
      <div class="game-details">
        <h4>
          <a href="">{game.nameGame}</a>
        </h4>
        <div class="game-bottom-details">
          <div class="game-price">
            {game.price == 0 ? "Free" : "€ " + game.price}
          </div>
          <div class="badge-plateform">
            <img src={PC} alt="" width="40" />
            <img src={getPlateformLogo(game.sellerName)} alt="" width="40" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;