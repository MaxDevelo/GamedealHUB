import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "@/index.scss";

import Root from "@/root.jsx";
import Home from "@/pages/homepage/Home";
import Category from "@/pages/category/Category";
import { addWishlist } from '@/components/GameInfo/GameInfo'
import Catalog from "@/components/Catalog/Catalog";
import InfoGame  from "@/pages/infogame/InfoGame";
import Signup, { createUser } from "@/pages/signup/Signup";
import Signin, { getUser } from "@/pages/signin/Signin";
import { homeGamesFilterActionLoader } from "@/services/actionloaders/home_games";
import { categoryGamesActionLoader } from "@/services/actionloaders/category_games";
import { gameInfoActionLoader } from "@/services/actionloaders/game_info";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeGamesFilterActionLoader,
        },
        {
          path: 'signup',
          element: <Signup />,
          action: createUser
        },
        {
          path: 'signin',
          element: <Signin />,
          action: getUser,
        },
        {
          path: "category",
          element: <Category />,
          children: [
            {
              index: true,
              element: <Catalog />,
              loader: categoryGamesActionLoader,
            },
            {
              path: ":category",
              element: <Catalog />,
              loader: categoryGamesActionLoader,
            },
            {
              path: ":category/:sort",
              element: <Catalog />,
              loader: categoryGamesActionLoader,
            },
          ],
        },
        {
          path: "game",
          children: [
            {
              index: true,
              element: <Root />,
            },
            {
              path: ":game",
              element: <InfoGame />,
              loader: gameInfoActionLoader,
              action: addWishlist
            },
          ]
        }
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
