import { urlGetFreeGames, urlGetMostRecentsGames, urlGetUnderPriceGames } from "./config.js";
export const get_free_games = () => {
  return Promise.all([ 
    fetch(urlGetFreeGames()),
    fetch(urlGetUnderPriceGames(5))
  ]).then(async([a, b]) => {
    const data = await a.json();
    const under_price_games = await b.json();
    return [data, {data: under_price_games}]
  })
  .then((data) => {
    return data;

  }).catch((err) => {
    console.log(err);
  });
};

export const get_most_recents_games = () => {
    return Promise.all([ 
        fetch(urlGetMostRecentsGames()),
        fetch(urlGetUnderPriceGames(5))
      ]).then(async([a, b]) => {
        const data = await a.json();
        const under_price_games = await b.json();
        return [data, {data: under_price_games}]
      })
      .then((data) => {
        return data;
    
      }).catch((err) => {
        console.log(err);
      });
  };
  