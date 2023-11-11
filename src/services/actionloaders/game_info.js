import {
  get_game_by_id
} from "../api/games";
import { redirect } from "react-router-dom";
export const gameInfoActionLoader = async  ({ request, params }) => {
  const url = new URL(request.url);
  // Si l'utilisateur cherche un jeux dans la barre de recherche
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams)
  }
  let data = await get_game_by_id(params.game);
  console.log(data)
  return (data[0].data.length > 0) ? data : redirect('/');
};
