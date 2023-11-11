import {
  get_category_games
} from "../api/games_home";
import { redirect } from "react-router-dom";
import useAuth from "@/auth";

const LIMIT = 20;

export const homeGamesFilterActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  // Si l'utilisateur cherche un jeux dans la barre de recherche
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams)
  }
  return await get_category_games(LIMIT) ?? null;
};

export const accountPageVerification = () => {
  const user = useAuth.getState().user;
  if (user === null) {
    return redirect("/");
  }
  return null;
};