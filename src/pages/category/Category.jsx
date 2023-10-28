import React from "react";

import Header from "@/components/Header/Header";
import { Outlet, NavLink } from "react-router-dom";
import "./category.scss";

const Category = () => {
  return (
    <>
      <Header type="" />
      <div className="categories-games-container">
        <Outlet />

        <div className="container-categories">
          <h2>CATEGORIES</h2>
          <div className="categories">
            <NavLink
              to={"most-recent"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Most Recent
            </NavLink>
            <NavLink
              to={"top-deals"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Top Deals
            </NavLink>
            <NavLink
              to={"free-to-play"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Free To Play
            </NavLink>
            <NavLink
              to={"most-popular"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Most Popular
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
