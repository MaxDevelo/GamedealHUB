import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import '@/index.scss'

import Root from '@/root.jsx'
import Home from '@/pages/homepage/Home'
import Category from '@/pages/category/Category'
import CategoryContainer from '@/components/category/CategoryContainer'
import { homeGamesFilterActionLoader } from '@/services/actionloaders/home_gamesfilter'
import { categoryGamesActionLoader } from '@/services/actionloaders/category_games' 

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeGamesFilterActionLoader
        },
        {
          path: "category",
          element: <Category />,
          loader: categoryGamesActionLoader,
          children: [
            {
              path: "",
              element: <CategoryContainer />,
              loader: categoryGamesActionLoader
            },
            {
              path: ":category",
              element: <CategoryContainer />,
              loader: categoryGamesActionLoader
            }
          ]
        }
      ]
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
