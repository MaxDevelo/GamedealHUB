import React from "react";
import "./gallery.scss";
import { Form, useLoaderData, Link, useNavigation } from "react-router-dom";
import getPlateformLogo from "@/utils/getPlateformLogo";
import Loader from "../Loading/Loader";

const Gallery = () => {
  let navigate = useNavigation();

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
              value="most_popular"
            />
            <button className="btn-catalog-form" type="submit">
              Most Popular
            </button>
          </Form>
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
        {navigate.state === "loading" ? (
          <Loader />
        ) : games ? (
          games[0].data.map((game) => (
            <Link className="game-item" to={`/game/${game.id}`} key={game.id}>
              <img
                src={game.thumbnail ? game.thumbnail : game.coverH}
                alt="gallery grid"
                className="image_cover"
              />
              <div className="game-info">
                <h3>
                  {game.nameGame.length > 20
                    ? game.nameGame.substring(0, 20).concat("...")
                    : game.nameGame}
                </h3>
              </div>
              <p className="price">
                {(game.price) ?  (game.price == 0 ? "Free" : "€ " + game.price) : "????"}
              </p>
            </Link>
          ))
        ) : (
          <h2>No games found</h2>
        )}
        {navigate.state !== "loading" && games && games[0].data.length > 0 ? (
          <Link to={"/category/" + ((games[2].type == "Free") ? "free-to-play" : (games[2].type == "News" ? "most-recent" : "top-deals"))} className="btn-see-all-games">
            See all games
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="game-low-price">
        <h2>GAMES UNDER € 5</h2>
        {games && games[1] ? (
          games[1].data.data.map((game) => (
            <Link className="game-item" to={`/game/${game.id}`} key={game.id}>
              <img src={game.thumbnail ? game.thumbnail : game.coverH} alt="gallery grid" />
              <h3>
                {game.nameGame.length > 40
                  ? game.nameGame.substring(0, 40).concat("...")
                  : game.nameGame}
              </h3>
              <p className="price">{(game.price_game) ? ("€ " +  game.price_game) : "????" }</p>
            </Link>
          ))
        ) : (
          <h2>No games found</h2>
        )}
      </div>
    </div>
  );
};

export default Gallery;
