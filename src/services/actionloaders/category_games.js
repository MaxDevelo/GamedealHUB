import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
  get_top_deals_by_sort,
  get_free_games_by_sort,
  get_most_recent_by_sort,
  get_game_by_name,
  get_game_by_name_by_sort,
  get_most_popular_games,
  get_genre_games,
  get_most_popular_games_by_sort
} from "../api/games";

const LIMIT = 30000;

export const categoryGamesActionLoader = async ({ request, params }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  if (search) {
    return await get_game_by_name(search.toLowerCase());
  } else if (search && params.sort) {
    return await get_game_by_name_by_sort(search.toLowerCase(), params.sort);
  }
  // Verify if a category (genres)
  if (!isNaN(params.category)) {
    return await get_genre_games(params.category, params.sort);
  }
  if (!params.sort) {
    if (params.category === "free-to-play") {
      return await get_free_games(LIMIT);
    } else if (params.category === "most-recent") {
      return await get_most_recents_games(LIMIT);
    } else if (params.category === "most-popular") {
      return await get_most_popular_games(LIMIT);
    } else if (params.category === "top-deals") {
      return await get_top_deals(LIMIT);
    }
  } else {
    if (params.category === "top-deals") {
      return await get_top_deals_by_sort(LIMIT, params.sort);
    } else if (params.category === "most-recent") {
      return await get_most_recent_by_sort(LIMIT, params.sort);
    } else if (params.category === "free-to-play") {
      return await get_free_games_by_sort(LIMIT, params.sort);
    } else if (params.category === "most-popular") {
      return await get_most_popular_games_by_sort(LIMIT, params.sort);
    } else {
      return await get_most_recents_games(LIMIT);
    }
  }
};
