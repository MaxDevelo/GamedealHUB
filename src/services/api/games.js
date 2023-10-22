import {
  urlGetFreeGames,
  urlGetMostRecentsGames,
  urlGetUnderPriceGames,
  urlGetTopDealsGames,
  urlGetTopDealsGamesBySort,
  urlGetFreeGamesBySort,
  urlGetMostRecentsGamesBySort,
  urlGetGameById,
  urlGetGameByName,
  urlGetGameByNameBySort
} from "./config.js";
export const get_free_games = (limit) => {
  return Promise.all([
    fetch(urlGetFreeGames(limit)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then(async ([a, b]) => {
      const data = await a.json();
      const under_price_games = await b.json();
      return [data, { data: under_price_games }, { type: "Free" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_most_recents_games = (limit) => {
  return Promise.all([
    fetch(urlGetMostRecentsGames(limit ?? 20)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then(async ([a, b]) => {
      const data = await a.json();
      const under_price_games = await b.json();
      return [data, { data: under_price_games }, { type: "News" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_top_deals = (limit) => {
  return Promise.all([
    fetch(urlGetTopDealsGames(limit)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then(async ([a, b]) => {
      const data = await a.json();
      const under_price_games = await b.json();
      return [data, { data: under_price_games }, { type: "Top Deals" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_top_deals_by_sort = (limit, sort) => {
    return Promise.all([
      fetch(urlGetTopDealsGamesBySort(limit, sort)),
      fetch(urlGetUnderPriceGames(5)),
    ])
      .then( async ([a, b]) => {
        const data =  await a.json();
        const under_price_games =  await b.json();
        return [data, { data: under_price_games }, { type: "Top Deals" }];
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
};

export const get_free_games_by_sort = (limit, sort) => {
  return Promise.all([
    fetch(urlGetFreeGamesBySort(limit, sort)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then( async ([a, b]) => {
      const data =  await a.json();
      const under_price_games =  await b.json();
      return [data, { data: under_price_games }, { type: "Free" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_most_recent_by_sort = (limit, sort) => {
  return Promise.all([
    fetch(urlGetMostRecentsGamesBySort(limit, sort)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then( async ([a, b]) => {
      const data =  await a.json();
      const under_price_games =  await b.json();
      return [data, { data: under_price_games }, { type: "News" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_game_by_id = (id) => {
  return fetch(urlGetGameById(id))
    .then((response =>  response.json()
    ))
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const get_game_by_name = (name) => {
  return Promise.all([
    fetch(urlGetGameByName(name)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then( async ([a, b]) => {
      const data =  await a.json();
      const under_price_games =  await b.json();
      return [data, { data: under_price_games }, { type: "Top" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const get_game_by_name_by_sort = (name, sort) => {
  return Promise.all([
    fetch(urlGetGameByNameBySort(name, sort)),
    fetch(urlGetUnderPriceGames(5)),
  ])
    .then( async ([a, b]) => {
      const data =  await a.json();
      const under_price_games =  await b.json();
      return [data, { data: under_price_games }, { type: "Top" }];
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};