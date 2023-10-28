import {
  get_game_by_id
} from "../api/games";

export const gameInfoActionLoader = async  ({ params }) => {
  return await get_game_by_id(params.game);
};
