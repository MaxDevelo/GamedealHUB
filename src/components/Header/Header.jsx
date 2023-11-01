import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import "./header.scss";
import GameCard from "../GameCard/GameCard";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
];
const Header = ({ type }) => {
  const games = useLoaderData();

  return (
    <header>
      <h1 className="brand">Compares game prices from official stores only</h1>
      <nav className="navbar">
        <ul>
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo website"
                className="logo"
                width="200px"
              />
            </Link>
          </div>
          <div className="searchGame">
            <Form className="form-searchgame">
              <input
                className="search-game"
                type="text"
                name="search"
                id="search"
                placeholder="Search by the title ..."
              />
            </Form>
          </div>
          <li>
            <Link to="/category/most-recent">Deals</Link>
          </li>
        </ul>
      </nav>
      {type === "home" && (
        <div className="home-main-carousel">
          <Carousel breakPoints={breakPoints}>
            {games &&
              games[0] &&
              games[0].data
                .slice(0, 8)
                .map((game) => <GameCard game={game} type={games[2].type} />)}
          </Carousel>
        </div>
      )}
    </header>
  );
};

export default Header;
