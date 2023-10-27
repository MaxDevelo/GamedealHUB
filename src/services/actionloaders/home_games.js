import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
  get_most_popular_games
} from "../api/games_home";

const LIMIT = 10;

export const homeGamesFilterActionLoader = async ({ request }) => {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");
  if (filter == "free_to_play") {
    return await get_free_games(LIMIT);
  } else if (filter == "most_recents") {
    return await get_most_recents_games(LIMIT);
  } else if (filter === "most_popular") {
    return await get_most_popular_games(LIMIT);
  } else if (filter == "top_deals") {
    return await get_top_deals(LIMIT);
  } else {
    return await get_most_popular_games(LIMIT);
  }
};
