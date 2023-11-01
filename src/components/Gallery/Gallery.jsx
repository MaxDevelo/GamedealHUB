import React from "react";
import "./gallery.scss";
import {useLoaderData, Link, useNavigation } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Loader from "../Loading/Loader";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Gallery = () => {
  let navigate = useNavigation();

  const games = useLoaderData();
  return (
    <div className="catalog-games-container">
      <div className="catalog-games">
        <div className="catalog-info">
          <h2>Deals</h2>
        </div>
        {navigate.state === "loading" ? (
          <Loader />
        ) : games ? (
          <div className="categoryGames">
            <div className="topDeals">
            <h3>Top Deals</h3>
            {games[0].data.map((game) => (
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
                  {(game.price != null) ?  (game.price == 0 ? "Free" : "€ " + game.price) : "????"}
                </p>
              </Link>
            ))}
            <Link to={"/category/top-deals"} className="btn-see-all-games">
              Browse All Top Deals Games
            </Link>
            </div>
            <div className="mostRecents">
            <h3>News</h3>
            {games[1].data.map((game) => (
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
                  {(game.price != null) ?  (game.price == 0 ? "Free" : "€ " + game.price) : "????"}
                </p>
              </Link>
            ))
            }
            <Link to={"/category/News"} className="btn-see-all-games">
            Browse All News Games
            </Link>
            </div>
            <div className="freeGames">
            <h3>Free to play</h3>
            {games[2].data.map((game) => (
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
                  {(game.price != null) ?  (game.price == 0 ? "Free" : "€ " + game.price) : "????"}
                </p>
              </Link>
            ))
            }
            <Link to={"/category/free-to-play"} className="btn-see-all-games">
            Browse All Free Games
            </Link>
            </div>
          </div>
        ) : (
          <h2>No games found</h2>
        )}
      </div>
    <div className="containerPopularGames">
      <h2>Most Popular</h2>
       <Carousel breakPoints={breakPoints} className="mostPopular">
        {games[3].data.slice(0,8).map((game) => (
                <Link className="game-item" to={`/game/${game.id}`} key={game.id}>
                  <img
                    src={game.coverH ? game.coverH : game.coverH}
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
                    {(game.price != null) ?  (game.price == 0 ? "Free" : "€ " + game.price) : "????"}
                  </p>
                </Link>
              ))
        }
      </Carousel>
    </div>
    </div>
  );
};

export default Gallery;
