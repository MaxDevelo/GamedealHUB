import { get_free_games, get_most_recents_games } from "../api/games";

export const homeGamesFilterActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");
  if (filter == "free_to_play") {
    return await get_free_games();
  } else if (filter == "most_recents") {
    return await get_most_recents_games();
  } else {
    alert("test");
    return null;
  }
};
