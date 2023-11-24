import React, { useState, useEffect } from "react";
import "./catalog.scss";
import {
  useLoaderData,
  useNavigation,
  useNavigate,
  Form,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";
import ReactPaginate from "react-paginate";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Loader from "../Loading/Loader";

const getTitleCategory = (type) => {
  // Vérifier sur quelle catégorie on est actuellement
  switch (type) {
    case "Top Deals":
      return "Top Deals";
    case "News":
      return "Most Recent";
    case "Free":
      return "Free To Play";
    default:
      return "";
  }
};

const Catalog = () => {
  let games = useLoaderData();
  let params = useParams();
  // Affichage des jeux actuels dans la pagination
  const [currentGames, setCurrentGames] = useState(null);
  // Nombre de pages
  const [pageCount, setPageCount] = useState(0);
  // Les pages qui sont invisibles dans la pagination
  const [gamesOffset, setgamesOffset] = useState(0);
  // Trier les jeux
  const [sort, setSort] = useState(0);
  // Selection dans le selecteur, le genre de jeu (Sport, etc..)
  const [genre, setGenre] = useState(0);
  const navigate = useNavigate();
  let { search } = useLocation();

  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    navigate("/category/" + event.target.value);
  };
  useEffect(() => {}, [genre, setGenre]);

  const handleChangeSelect = (event) => {
    setSort(event.target.value);
    navigate(
      "/category/" + params.category + "/" + event.target.value + search
    );
  };

  const navigation = useNavigation();
  /**
   * Cette partie gère la pagination
   */
  useEffect(() => {
    const endOffset = gamesOffset + 20;
    setCurrentGames(games[0].data.slice(gamesOffset, endOffset));
    setPageCount(Math.ceil(games[0].data.length / 20)); // On compte combien il y a de page (20 jeux / page)
  }, [games[0].data, gamesOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 20) % games[0].data.length;
    setgamesOffset(newOffset);
  };

  return (
    <div className="catalog-games">
      {navigation.state === "loading" ? (
        <Loader />
      ) : (
        <>
          <div className="information-category">
            <h2>{games ? getTitleCategory(games[1].type) : "Most Recent"}</h2>
            <Form>
              <Select
                labelId="sort-select"
                id="sort-select"
                className="sort-select"
                value={sort}
                onChange={handleChangeSelect}
              >
                {games && games[1].type !== "Free" ? (
                  <MenuItem value={0}>Price Low to high</MenuItem>
                ) : null}
                {games && games[1].type !== "Free" ? (
                  <MenuItem value={1}>Price High to low</MenuItem>
                ) : null}
                <MenuItem value={2}>Oldest Release Date</MenuItem>
                <MenuItem value={3}>Newest Release Date</MenuItem>
              </Select>
              <Select
                labelId="genres"
                id="genres"
                value={genre}
                name="genres"
                label="genres"
                className="genres-select"
                onChange={handleChangeGenre}
              >
                <MenuItem value={0}>Action</MenuItem>
                <MenuItem value={1}>Role-Playing</MenuItem>
                <MenuItem value={2}>Aventure</MenuItem>
                <MenuItem value={3}>Racing</MenuItem>
                <MenuItem value={4}>Shooter</MenuItem>
                <MenuItem value={5}>Simulation</MenuItem>
                <MenuItem value={6}>Sport</MenuItem>
                <MenuItem value={7}>Strategy</MenuItem>
              </Select>
            </Form>
          </div>
          <div className="catalog-info">
            {currentGames && currentGames.length > 0 ? (
              currentGames.map((game) => (
                <Link
                  className="game-item"
                  to={`/game/${game.id}`}
                  key={game.id}
                >
                  <div className="detail-product">
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
                      <div className="logoPlateform">
                        <img src={PC} />
                        <h4>{game.date.split("T")[0]}</h4>
                      </div>
                    </div>
                  </div>
                  {(game.minPrice && game.maxPrice) ? (
                    <p className={game.maxPrice == 0 ? "price-free" : "price"}>
                      <span className="max-price">
                        {game.maxPrice != null ? game.maxPrice  + "€" : "Free"}
                      </span>
                      {game.minPrice != null ? game.minPrice + "€" : "Free"}
                    </p>
                  ) : (
                    <p className={game.price == 0 ? "price-free" : "price"}>
                      {game.price != null
                        ? game.price == 0
                          ? "Free"
                          : game.price.toFixed(2) + "€"
                        : "????"}
                    </p>
                  )}
                </Link>
              ))
            ) : (
              <h2 className="nogamefound">No games found</h2>
            )}
          </div>
          <div className="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              prev
              iousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Catalog;
