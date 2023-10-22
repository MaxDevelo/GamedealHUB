import React from "react";
import "./gallery.scss";
import { Form, useLoaderData, Link, useNavigation } from "react-router-dom";
import getPlateformLogo from "../utils/getPlateformLogo";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import PC from "../assets/img/plateforms-logo/PC.png";

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
          <Stack
            sx={{ display: "flex", justifyContent: "center", padding: "40px" }}
            spacing={2}
            direction="row"
          >
            <CircularProgress
              color="secondary"
              className="loading-catalogs"
              size="6rem"
            />
          </Stack>
        ) : games ? (
          games[0].data.map((game) => (
            <Link className="game-item" to={`/games/${game.id}`}>
              <img
                src={game.coverH}
                alt="gallery grid"
                className="image_cover"
              />
              <div className="game-info">
                <h3>
                  {game.nameGame.length > 20
                    ? game.nameGame.substring(0, 20).concat("...")
                    : game.nameGame}
                </h3>
                <div className="logoPlateform">
                  <img src={PC} alt="plateform" />
                  <img
                    src={getPlateformLogo(game.sellerName)}
                    alt="plateform"
                  />
                </div>
              </div>
              <p className="price">
                {game.price == 0 ? "Free" : "€ " + game.price}
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
            <Link className="game-item" href="#" to={`/games/${game.id}`}>
              <img src={game.coverH} alt="gallery grid" />
              <h3>
                {game.nameGame.length > 40
                  ? game.nameGame.substring(0, 40).concat("...")
                  : game.nameGame}
              </h3>
              <p className="price">€ {game.price_game}</p>
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
