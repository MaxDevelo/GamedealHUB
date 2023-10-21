import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
} from "../api/games";

export const homeGamesFilterActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");
  if (filter == "free_to_play") {
    return await get_free_games(20);
  } else if (filter == "most_recents") {
    return await get_most_recents_games(20);
  } else if (filter == "top_deals") {
    return await get_top_deals(20);
  } else {
    return await get_most_recents_games(20);
  }
};
