import React, { useEffect } from "react";

import Header from "@/components/Header/Header";
import { Outlet, NavLink, Form, useLocation, useParams, useNavigate } from "react-router-dom";
import "./category.scss";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Category = () => {
  const [genre, setGenre] = React.useState(0);
  let { search } = useLocation();
  let params = useParams();
  let navigate = useNavigate();
  const handleChange = (event) => {
    setGenre(event.target.value);
    navigate("/category/" + event.target.value + search);
  };
  useEffect(() => {
  }, [genre, setGenre]);
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
            <Form>
              <Select
                labelId="genres"
                id="genres"
                value={genre}
                name="genres"
                label="genres"
                defaultLabel="0"
                onChange={handleChange}
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
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
        </div>
      </div>
    </>
  );
};
export default Category;
