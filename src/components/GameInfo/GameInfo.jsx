import React from "react";
import "./gameinfo.scss";
import { useLoaderData } from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";
import METACRITIC from "../../assets/img/plateforms-logo/metacritic.png";
import parse from "html-react-parser";
import getImageSeller from "../../utils/getPlateformLogo";
import getMetacriticType from "../../utils/getMetacriticType";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player';

const GameInfo = () => {
  window.scrollTo(0, 0)
  let game_info = useLoaderData();
  let firstGame = game_info[0].data[0];
  let media = game_info[1].data;
  const minPrice = game_info[0].data.reduce(
    (game1, game2) =>
    game1.price < game2.price
        ? game1
        : game2
  );
  let sortGames = game_info[0].data.sort((a, b) => a.price - b.price);
  if (firstGame) {
    document.title = "Buy cheap " + firstGame.name + " | GameDealHub"
    return (
      <div className="game-container">
      <div className="first-box">
        <div className="game-info">
          <img src={firstGame.coverV ? firstGame.coverV : ""} alt="PC" className="game-img" />
          <div className="plateforms">
            <img src={PC} alt="PC" className="plateform-img" width="50px" />
          </div>
          <hr className="sperator-box" />
          <div className="metacritic-note">
            <img src={METACRITIC} alt="PC" className="metacritic-img" />
            <p
              className={
                firstGame.note == -1 || firstGame.note == null
                  ? ""
                  : getMetacriticType(firstGame.note) === "best"
                  ? "good-note"
                  : getMetacriticType(firstGame.note) === "middle"
                  ? "middle-note"
                  : "low-note"
              }
            >
              {firstGame.note == -1 || firstGame.note == null
                ? "N/A"
                : firstGame.note}
            </p>
          </div>
        </div>
        </div>
        <div className="game-details">
          <h2>{firstGame.name}</h2>
          <div className="others">
            <p className="date">Release Date: {firstGame.date.split("T")[0]}</p>
            <p className="author">Publisher: {firstGame.publisherName}</p>
          </div>
          <Carousel thumbWidth="100px" width="50%" autoPlay interval="2000" transitionTime="2000" infiniteLoop>
            {media.slice(0,5).map((m) => (
              <div key={m.id}>
              {
                (!m.video) && <img src={m.url} alt="PC" className="game-img" />
              }
              </div>
            ))}
          </Carousel>
          <hr className="sperator-box" />
          <p>{firstGame.description && parse(firstGame.description)}</p>
          <hr className="sperator-box" />
          <div className="container-buy">
          <div className="video-box">
          <ReactPlayer url={(media.filter(x => x.video == 1)[0]) && media.filter(x => x.video == 1)[0].url}/>
          </div>
            <h2>Game Prices</h2>
            <div className="game-buy-link">
              <div className="game-link">
                <p className="column">Store</p>
                <p className="column">Price</p>
                <p className="column">Buy</p>
              </div>
              {sortGames &&
                sortGames.map((game_link) => (
                  <div className={"game-link" + ((minPrice.seller === game_link.seller) ? " best-price" : "")} key={game_link.id}>
                    <img
                      src={getImageSeller(game_link.sellerName.toLowerCase(), game_link.url)}
                      width="60px"
                    />
                    <p className="price">
                      {" "}
                      {game_link.price == 0
                        ? "Free"
                        : "€ " +
                          Math.floor((game_link.price / 100) * 100) / 100}
                    </p>
                    <a href={game_link.url} target="_blank">BUY NOW</a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="game-container">
        <p style={{ fontSize: "40px", textAlign: "center", width: "100%" }}>
          Sorry, the game is not accesible..
        </p>
      </div>
    );
  }
};

export default GameInfo;
