import {
  urlGetFreeGames,
  urlGetMostRecentsGames,
  urlGetUnderPriceGames,
  urlGetTopDealsGames,
  urlGetMostPopularGames,
} from "./config.js";

export const get_category_games = (limit) => {
  return Promise.all([
    fetch(urlGetTopDealsGames(limit ?? 20)),
    fetch(urlGetMostRecentsGames(limit ?? 20)),
    fetch(urlGetFreeGames(limit ?? 20)),
    fetch(urlGetMostPopularGames(limit ?? 20)),
  ])
    .then(async ([topdeals, newsgame, freegame, populargame]) => {
      const data = await topdeals.json();
      const data2 = await newsgame.json();
      const data3 = await freegame.json();
      const data4 = await populargame.json();
      return [data, data2, data3, data4, { type: "Popular" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
