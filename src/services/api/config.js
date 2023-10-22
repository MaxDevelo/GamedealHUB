const $url_host = "http://gamedealhub.com:8080/";

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
export const urlGetGameById = (game_id) => {
    return $url_host + "api/games/" + game_id;
}
export const urlGetGameByName = (game_name) => {
    return $url_host + "api/games/search/" + game_name;
}
export const urlGetGameByNameBySort = (game_name, sort) => {
    return $url_host + "api/games/search/" + game_name + "/" + sort;
}