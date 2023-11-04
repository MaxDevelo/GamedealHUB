import {
  get_game_by_id
} from "../api/games";
import { redirect } from "react-router-dom";
export const gameInfoActionLoader = async  ({ request, params }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams)
  }
  return await get_game_by_id(params.game);
};
