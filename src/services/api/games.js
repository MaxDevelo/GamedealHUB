import { urlGetFreeGames, urlGetMostRecentsGames, urlGetUnderPriceGames, urlGetTopDealsGames } from "./config.js";
export const get_free_games = (limit) => {
  return Promise.all([ 
    fetch(urlGetFreeGames(limit)),
    fetch(urlGetUnderPriceGames(5))
  ]).then(async([a, b]) => {
    const data = await a.json();
    const under_price_games = await b.json();
    return [data, {data: under_price_games}, {type:"Low Price"}]
  })
  .then((data) => {
    return data;

  }).catch((err) => {
    console.log(err);
  });
};

export const get_most_recents_games = (limit) => {
    return Promise.all([ 
        fetch(urlGetMostRecentsGames(limit ?? 20)),
        fetch(urlGetUnderPriceGames(5))
      ]).then(async([a, b]) => {
        const data = await a.json();
        const under_price_games = await b.json();
        return [data, {data: under_price_games}, {type:"News"}]
      })
      .then((data) => {
        return data;
    
      }).catch((err) => {
        console.log(err);
      });
  };
  
export const get_top_deals = (limit) => {
  return Promise.all([ 
      fetch(urlGetTopDealsGames(limit)),
      fetch(urlGetUnderPriceGames(5))
    ]).then(async([a, b]) => {
      const data = await a.json();
      const under_price_games = await b.json();
      return [data, {data: under_price_games}, {type:"Top Deals"}]
    })
    .then((data) => {
      return data;
  
    }).catch((err) => {
      console.log(err);
    });
};