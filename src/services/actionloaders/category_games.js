import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
  get_top_deals_by_sort,
  get_free_games_by_sort,
  get_most_recent_by_sort,
  get_game_by_name,
  get_game_by_name_by_sort,
  get_most_popular_games
} from "../api/games";

export const categoryGamesActionLoader = async ({ request, params }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  if (search && !params.sort) {
    return await get_game_by_name(search);
  } else if (search && params.sort) {
    return await get_game_by_name_by_sort(search, params.sort);
  }
  if (params.category === "free-to-play" && !params.sort) {
    return await get_free_games(10000);
  } else if (params.category === "most-recent" && !params.sort) {
    return await get_most_recents_games(10000);
  } else if (params.category === "most-popular" && !params.sort) {
    return await get_most_popular_games(10000);
  } else if (params.category === "top-deals" && !params.sort) {
    return await get_top_deals(10000);
  } else if (params.category === "top-deals" && params.sort) {
    return await get_top_deals_by_sort(10000, params.sort);
  } else if (params.category === "most-recent" && params.sort) {
    return await get_most_recent_by_sort(10000, params.sort);
  } else if (params.category === "free-to-play" && params.sort) {
    return await get_free_games_by_sort(10000, params.sort);
  } else {
    return await get_most_recents_games(10000);
  }
};
