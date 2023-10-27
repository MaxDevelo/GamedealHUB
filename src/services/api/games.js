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
  urlGetGameByNameBySort,
  urlGetMostPopularGames,
  urlGetMostPopularGamesBySort,
  urlGetGameMedia,
  urlGetGenreGames
} from "./config.js";

export const get_free_games = async (limit) => {
  return await fetch(urlGetFreeGames(limit ?? 20))
    .then(((response) => {
      return response.json();
    }))
    .then((data) => {
      return [data,  { type: "Free" }];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_most_recents_games = async (limit) => {
  return await fetch(urlGetMostRecentsGames(limit ?? 20))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return [data, { type: "News" }];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_top_deals = async (limit) => {
  return await fetch(urlGetTopDealsGames(limit ?? 20))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Top Deals" }];
  })
  .catch((err) => {
    console.log(err);
  });
};

export const get_top_deals_by_sort = async (limit, sort) => {
  return await fetch(urlGetTopDealsGamesBySort(limit ?? 20, sort))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Top Deals" }];
  })
  .catch((err) => {
    console.log(err);
  });
};

export const get_free_games_by_sort = async (limit, sort) => {
  return await fetch(urlGetFreeGamesBySort(limit ?? 20, sort))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Free" }];
  })
  .catch((err) => {
    console.log(err);
  });
};

export const get_most_recent_by_sort = async (limit, sort) => {
  return await fetch(urlGetMostRecentsGamesBySort(limit ?? 20, sort))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "News" }];
  })
  .catch((err) => {
    console.log(err);
  });
};
export const get_game_by_id = (id) => {
  return Promise.all([
      fetch(urlGetGameById(id)),
      fetch(urlGetGameMedia(id)),
    ])
      .then(async ([a, b]) => {
        const data = await a.json();
        const media = await b.json();
        return [data, media];
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
};
export const get_game_by_name = async (name) => {
  return await fetch(urlGetGameByName(name))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Top" }];
  })
  .catch((err) => {
    console.log(err);
  });
};
export const get_game_by_name_by_sort = async (name, sort) => {
  return await fetch(urlGetUnderPriceGames(name, sort))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Top" }];
  })
  .catch((err) => {
    console.log(err);
  });
};
export const get_most_popular_games = async (limit) => {
  return await fetch(urlGetMostPopularGames(limit ?? 20))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return [data, { type: "Popular" }];
    })
    .catch((err) => {
      console.log(err);
    });
};
export const get_most_popular_games_by_sort = async(limit, sort) => {
  return await fetch(urlGetMostPopularGamesBySort(limit ?? 20, sort))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return [data, { type: "Popular" }];
    })
    .catch((err) => {
      console.log(err);
    });
};
export const get_genre_games = async (genre_id, sort_id) => {
  return await fetch(urlGetGenreGames(genre_id, sort_id))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return [data, { type: "Genre" }];
  })
  .catch((err) => {
    console.log(err);
  });
};