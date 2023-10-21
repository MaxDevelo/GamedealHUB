import React from "react";
import "./gallery.scss";
import { Form, useLoaderData } from "react-router-dom";

import test_product_image from "../assets/img/test_product_image.jpg";
import PC from "../assets/img/plateforms-logo/PC.png";

const Gallery = () => {
  const games = useLoaderData();
  return (
    <div className="catalog-games-container">
      <div className="catalog-games">
        <div className="catalog-info">
          <h2>List Games</h2>
          <Form>
            <input
              type="hidden"
              name="filter"
              id="filter"
              value="most_recents"
            />
            <button className="btn-catalog-form" type="submit">
              Most Recent
            </button>
          </Form>
          <Form>
            <input type="hidden" name="filter" id="filter" value="top_deals" />
            <button className="btn-catalog-form" type="submit">
              Top Deals
            </button>
          </Form>
          <Form>
            <input
              type="hidden"
              name="filter"
              id="filter"
              value="free_to_play"
            />
            <button className="btn-catalog-form" type="submit">
              Free To Play
            </button>
          </Form>
        </div>
        {(games) ? games[0].data.map((game) => (
          <a className="game-item" href="#">
            <img src={game.coverH} alt="gallery grid" />
            <div className="game-info">
              <h3>{game.name}</h3>
              <img src={PC} className="logoPlateform" alt="plateform" />
            </div>
            <p className="price">€ {game.price}</p>
          </a>
        ))
        : <h2>No games found</h2>
        }
      </div>

      <div className="game-low-price">
        <h2>GAMES UNDER € 5</h2>
        {(games && games[1]) ? games[1].data.data.map((game) => (
          <a className="game-item" href="#">
          <img src={game.coverH} alt="gallery grid" />
          <h3>{game.name}</h3>
          <p className="price">€ {game.price_game}</p>
        </a>
        ))
        : <h2>No games found</h2>
        }
      </div>
    </div>
  );
};

export default Gallery;
