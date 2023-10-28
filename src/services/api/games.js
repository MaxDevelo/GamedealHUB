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

export const get_free_games =  (limit) => {
  return  fetch(urlGetFreeGames(limit ?? 20))
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

export const get_most_recents_games = (limit) => {
  return fetch(urlGetMostRecentsGames(limit ?? 20))
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      return [data, { type: "News" }];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_top_deals =  (limit) => {
  return  fetch(urlGetTopDealsGames(limit ?? 20))
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

export const get_top_deals_by_sort =  (limit, sort) => {
  return  fetch(urlGetTopDealsGamesBySort(limit ?? 20, sort))
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

export const get_free_games_by_sort =  (limit, sort) => {
  return  fetch(urlGetFreeGamesBySort(limit ?? 20, sort))
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

export const get_most_recent_by_sort =  (limit, sort) => {
  return  fetch(urlGetMostRecentsGamesBySort(limit ?? 20, sort))
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
      .then( ([a, b]) => {
        const data =  a.json();
        const media =  b.json();
        return [data, media];
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
};
export const get_game_by_name =  (name) => {
  return  fetch(urlGetGameByName(name))
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
export const get_game_by_name_by_sort =  (name, sort) => {
  return  fetch(urlGetUnderPriceGames(name, sort))
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
export const get_most_popular_games =  (limit) => {
  return  fetch(urlGetMostPopularGames(limit ?? 20))
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
export const get_most_popular_games_by_sort = (limit, sort) => {
  return  fetch(urlGetMostPopularGamesBySort(limit ?? 20, sort))
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
export const get_genre_games =  (genre_id, sort_id) => {
  return  fetch(urlGetGenreGames(genre_id, sort_id))
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