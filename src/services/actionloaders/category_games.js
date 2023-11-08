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
  get_most_popular_games_by_sort,
} from "../api/games";

const LIMIT = 5000;

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
  switch (params.category) {
    case "free-to-play":
      return !params.sort
        ? await get_free_games(LIMIT)
        : await get_free_games_by_sort(LIMIT, params.sort);
    case "most-recent":
      return !params.sort
        ? await get_most_recents_games(LIMIT)
        : await get_most_recent_by_sort(LIMIT, params.sort);
    case "most-popular":
      return !params.sort
        ? await get_most_popular_games(LIMIT)
        : await get_most_popular_games_by_sort(LIMIT, params.sort);
    case "top-deals":
      return !params.sort
        ? await get_top_deals(LIMIT)
        : await get_top_deals_by_sort(LIMIT, params.sort);
    default:
      return await get_most_recents_games(LIMIT);
  }
};
