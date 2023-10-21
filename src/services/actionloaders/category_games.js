import {
  get_free_games,
  get_most_recents_games,
  get_top_deals,
} from "../api/games";

export const categoryGamesActionLoader = async ({ params }) => {
  if (params.category === "free-to-play") {
    return await get_free_games(4000);
  } else if (params.category === "most-recent") {
    return await get_most_recents_games(4000);
  } else if (params.category === "top-deals") {
    return await get_top_deals(4000);
  } else {
    return await get_most_recents_games(4000);
  }
};
