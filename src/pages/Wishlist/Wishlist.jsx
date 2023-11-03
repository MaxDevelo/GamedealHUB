import React from "react";

import Header from "@/components/Header/Header";
import useAuth from "@/auth";
import { useLoaderData, redirect, Link, Form } from "react-router-dom";
import "./wishlist.scss";
import PC from "../../assets/img/plateforms-logo/PC.png";
import { delete_game_wishlist_by_user_id } from "@/services/api/users";

export const deleteGameWishlist = async ({ request }) => {
  let formData = await request.formData();
  let data = Object.fromEntries(formData);

  return await delete_game_wishlist_by_user_id(data["user_id"], data["game_id"])
    .then(() => {
      return redirect("/wishlist");
    })
    .catch((error) => {
      return redirect("/wishlist");
    });
};

export default function Wishlist() {
  let gamesWishlist = useLoaderData();
  const user = useAuth.getState().user;
  if (user === null) {
    return redirect("/");
  }
  return (
    <div className="wishlistPage">
      <Header type="" />
      <div className="wishlist">
        <h2>Wishlist</h2>
        <div className="catalog-info">
          {(gamesWishlist && gamesWishlist.data.length > 0) ? (
            gamesWishlist.data.map((game) => (
              <div className="list-game">
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
                        {game.name.length > 20
                          ? game.name.substring(0, 20).concat("...")
                          : game.name}
                      </h3>
                      <div className="logoPlateform">
                        <img src={PC} />
                        <h4>{game.date.split("T")[0]}</h4>
                      </div>
                    </div>
                  </div>
                  <p className={game.price == 0 ? "price-free" : "price"}>
                    {game.price != null
                      ? game.price == 0
                        ? "Free"
                        : "€ " + (game.price / 100)
                      : "????"}
                  </p>
                </Link>
                <Form method="delete">
                  <input
                    type="hidden"
                    id="user_id"
                    name="user_id"
                    value={user[0].id}
                  />
                  <input
                    type="hidden"
                    id="game_id"
                    name="game_id"
                    value={game.id}
                  />
                  <button>X</button>
                </Form>
              </div>
            ))
          ) : (
            <h2 className="nogamefound">No games found</h2>
          )}
        </div>
      </div>
    </div>
  );
}
