import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
  get_top_deals_by_sort,
  get_free_games_by_sort,
  get_most_recent_by_sort,
} from "../api/games";

export const categoryGamesActionLoader = async ({ params }) => {
  if (params.category === "free-to-play" && !params.sort) {
    return await get_free_games(4000);
  } else if (params.category === "most-recent" && !params.sort) {
    return await get_most_recents_games(4000);
  } else if (params.category === "top-deals" && !params.sort) {
    return await get_top_deals(4000);
  } else if (params.category === "top-deals" && params.sort) {
    return await get_top_deals_by_sort(4000, params.sort);
  } else if (params.category === "most-recent" && params.sort) {
    return await get_most_recent_by_sort(4000, params.sort);
  } else if (params.category === "free-to-play" && params.sort) {
    return await get_free_games_by_sort(4000, params.sort);
  } else {
    return await get_most_recents_games(4000);
  }
};
