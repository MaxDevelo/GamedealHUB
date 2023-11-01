import {
  get_category_games
} from "../api/games_home";
import { redirect } from "react-router-dom";
const LIMIT = 20;

export const homeGamesFilterActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams)
  }
  return await get_category_games(LIMIT);
};
