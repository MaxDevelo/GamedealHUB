import * as React from "react";
import "./gallery.scss";
import { useLoaderData, Link, useNavigation } from "react-router-dom";
import Carousel from '@itseasy21/react-elastic-carousel';
import Loader from "../Loading/Loader";
import PC from "../../assets/img/plateforms-logo/PC.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

 // Taille des images pour le carrousel
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
/**
 * Ce composant permet d'afficher un jeu
 * 
 */
const GameItem = ({ game }) => {
  return (
    <Link className="game-item" to={`/game/${game.id}`} key={game.id}>
      <div className="detail-product">
        <img
          src={game.thumbnail ? game.thumbnail : game.coverH}
          alt="gallery grid"
          className="image_cover"
        />
        <div className="game-info">
          <h3>
            {game.nameGame.length > 20
              ? game.nameGame.substring(0, 20).concat("...") // On prend seulement les 30 premiers caractères du nom
              : game.nameGame}
          </h3>
          <div className="logoPlateform">
            <img src={PC} />
            <h4>{game.date.split("T")[0]}</h4>
          </div>
        </div>
      </div>
      {(game.minPrice && game.maxPrice) // Je vérifie si il y a un prix max et un prix minimum (pour la catégorie Top Deals)
      ?
      <p className={game.maxPrice == 0 ? "price-free" : "price"}>
      <span className="max-price">
      {game.maxPrice != null
          ? game.maxPrice + "€"
          : "Free"}
      </span>
        {game.minPrice != null
          ? game.minPrice + "€"
          : "Free"}
      </p>
      :
      <p className={game.price == 0 ? "price-free" : "price"}>
        {game.price != null
          ? game.price == 0
            ? "Free"
            : game.price  + "€"
          : "????"}
      </p>
      }
    </Link>
  );
};

const Gallery = () => {
  let navigate = useNavigation();
  // Gestion du menu d'onglets
  const [valueTab, setValueTab] = React.useState(1);

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };
  React.useEffect(() => {}, [valueTab, setValueTab]);
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
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              className="tabs"
            >
              <Tabs
                value={valueTab}
                onChange={handleChangeTabs}
                aria-label="basic tabs example"
              >
                <Tab label="Top Deals" value={1} />
                <Tab label="News" value={2} />
                <Tab label="Free to play" value={3} />
              </Tabs>
            </Box>
            <div className={valueTab == 1 ? "topDeals" : "topDeals hide"}>
              <h3>Top Deals</h3>
              {games && games[0].data.map((game) => (
                <GameItem game={game} />
              ))}
              <Link to={"/category/top-deals"} className="btn-see-all-games">
                Browse All Top Deals Games
              </Link>
            </div>
            <div className={valueTab == 2 ? "mostrecents" : "mostrecents hide"}>
              <h3>News</h3>
              {games && games[1].data.map((game) => (
                <GameItem game={game} />
              ))}
              <Link to={"/category/most-recent"} className="btn-see-all-games">
                Browse All News Games
              </Link>
            </div>
            <div className={valueTab == 3 ? "freeGames" : "freeGames hide"}>
              <h3>Free to play</h3>
              {games[2].data.map((game) => (
                <GameItem game={game} />
              ))}
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
          {games && games[3].data.slice(0, 8).map((game) => (
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
              <p className={game.price == 0 ? "price-free" : "price"}>
                {game.price != null
                  ? game.price == 0
            
                    ? "Free"
                    : (game.price)  + "€"
                  : "????"}
              </p>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
