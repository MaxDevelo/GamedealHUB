import React, { useState, useEffect } from "react";
import "./category.scss";
import { useLoaderData, useNavigation } from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import getPlateformLogo from "../../utils/getPlateformLogo";
import ReactPaginate from "react-paginate";

const Loading = () => {
  return (
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
  );
};
const getTitleCategory = (type) => {
  switch (type) {
    case "Top Deals":
      return "Top Deals";
    case "News":
      return "Most Recent";
    default:
      return "Free To Play";
  }
};

const CategoryContainer = () => {
  const navigation = useNavigation();
  const games = useLoaderData();
  const [currentGames, setCurrentGames] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [gamesOffset, setgamesOffset] = useState(0);
  console.log(games[0]);
  useEffect(() => {
    const endOffset = gamesOffset + 8;
    setCurrentGames(games[0].data.slice(gamesOffset, endOffset));
    setPageCount(Math.ceil(games[0].data.length / 8));
  }, [games[0].data, gamesOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % games[0].data.length;
    setgamesOffset(newOffset);
  };
  return (
    <div className="catalog-games">
      {navigation.state === "loading" ? (
        Loading()
      ) : (
        <>
          <h2>{games ? getTitleCategory(games[2].type) : "Most Recent"}</h2>
          <div className="catalog-info">
            {currentGames ? (
              currentGames.map((game) => (
                <a className="game-item" href="#">
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
                </a>
              ))
            ) : (
              <h2>No games found</h2>
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

export default CategoryContainer;
