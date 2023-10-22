import React, { useState, useEffect } from "react";
import "./gamecategory.scss";
import { Outlet, useLoaderData, NavLink, useLocation } from "react-router-dom";
import PC from "../../assets/img/plateforms-logo/PC.png";

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

const GameCategory = () => {
  return (
    <div className="categories-games-container">
      <Outlet />

      <div className="container-categories">
        <h2>CATEGORIES</h2>
        <div className="categories">
          <NavLink to={"most-recent"} className={({ isActive }) => isActive ? 'active' : ''}>Most Recent</NavLink>
          <NavLink to={"top-deals"}>Top Deals</NavLink>
          <NavLink to={"free-to-play"}>Free To Play</NavLink>
        </div>
      </div>
    </div>
  );
};

export default GameCategory;
