const $url_host = "http://gamedealhub.net/API_TOKEN=hvbPup569HAwx-byI2kNc1zLD-6=37DAym/";

export const urlGetFreeGames = (limit) => {
    return $url_host + "api/games/freetoplay/" + limit;
}

export const urlGetMostRecentsGames = (limit) => {
    return $url_host + "api/games/mostrecents/" + limit;
}

export const urlGetUnderPriceGames = (price) => {
    return $url_host + "api/games/underprice/" + price;
}

export const urlGetTopDealsGames = (limit) => {
    return $url_host + "api/games/topdeals/" + limit;
}

export const urlGetTopDealsGamesBySort = (limit, sort) => {
    return $url_host + "api/games/topdeals/" + limit + "/" + sort;
}
export const urlGetFreeGamesBySort = (limit, sort) => {
    return $url_host + "api/games/freetoplay/" + limit + "/" + sort;
}
export const urlGetMostRecentsGamesBySort = (limit, sort) => {
    return $url_host + "api/games/mostrecents/" + limit + "/" + sort;
}
export const urlGetGameByName = (game_name) => {
    return $url_host + "api/games/search/" + game_name;
}
export const urlGetGameByNameBySort = (game_name, sort) => {
    return $url_host + "api/games/search/" + game_name + "/" + sort;
}
export const urlGetMostPopularGames = (limit) => {
    return $url_host + "api/games/popular/" + limit;
}
export const urlGetMostPopularGamesBySort = (limit, sort) => {
    return $url_host + "api/games/popular/" + limit + "/" + sort;
}
// GAME INFO
export const urlGetGameById = (game_id) => {
    return $url_host + "api/game/" + game_id;
}
export const urlGetGameMedia = (game_id) => {
    return $url_host + "api/game/media/" + game_id;
}

// TAGS
export const urlGetGenreGames = (genre_id, sort) => {
    return $url_host + "api/games/" + genre_id + "/" + (sort ? sort : "");
}