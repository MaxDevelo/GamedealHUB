const $url_host = "http://localhost:8080/";

export const urlGetFreeGames = () => {
    return $url_host + "api/games/freetoplay";
}

export const urlGetMostRecentsGames = () => {
    return $url_host + "api/games/mostrecents";
}

export const urlGetUnderPriceGames = (price) => {
    return $url_host + "api/games/underprice/" + price;
}
