import { urlGetFreeGames, urlGetMostRecentsGames, urlGetUnderPriceGames, urlGetTopDealsGames } from "./config.js";
export const get_free_games = () => {
  return Promise.all([ 
    fetch(urlGetFreeGames()),
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
  console.log(limit)
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
  
export const get_top_deals = () => {
  return Promise.all([ 
      fetch(urlGetTopDealsGames()),
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