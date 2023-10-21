const $url_host = "http://localhost:8080/";

export const urlGetFreeGames = () => {
    return $url_host + "api/games/freetoplay";
}

export const urlGetMostRecentsGames = (limit) => {
    return $url_host + "api/games/mostrecents/" + limit;
}

export const urlGetUnderPriceGames = (price) => {
    return $url_host + "api/games/underprice/" + price;
}

export const urlGetTopDealsGames = () => {
    return $url_host + "api/games/topdeals";
}