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