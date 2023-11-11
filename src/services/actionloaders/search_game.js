import { redirect } from "react-router-dom";
const LIMIT = 20;

export const searchGameActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  // Si l'utilisateur cherche un jeux dans la barre de recherche
  const search = url.searchParams.get("search");
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams);
  }
  return null;
};
