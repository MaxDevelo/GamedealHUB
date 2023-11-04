import { redirect } from "react-router-dom";
import useAuth from "@/auth";
import {
    get_wishlist_by_user_id
  } from "../api/users";

export const wishlistGamesActionLoader = async ({ request }) => {
  const user = useAuth.getState().user;
  if (user === null) {
    return redirect("/");
  }
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular" + url.searchParams);
  }
  return await get_wishlist_by_user_id(user[0].id);
};
