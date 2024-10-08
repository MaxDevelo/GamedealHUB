const url_host = "http://gamedealhub.net/API_TOKEN=hvbPup569HAwx-byI2kNc1zLD-6=37DAym/";
// Api de secours
// const url_host = "https://api.dev.gamedealhub.com/API_TOKEN=hvbPup569HAwx-byI2kNc1zLD-6=37DAym/";

export const urlGetFreeGames = (limit) => {
    return url_host + "api/games/freetoplay/" + limit;
}

export const urlGetMostRecentsGames = (limit) => {
    return url_host + "api/games/mostrecents/" + limit;
}

export const urlGetUnderPriceGames = (price) => {
    return url_host + "api/games/underprice/" + price;
}

export const urlGetTopDealsGames = (limit) => {
    return url_host + "api/games/topdeals/" + limit;
}

export const urlGetTopDealsGamesBySort = (limit, sort) => {
    return url_host + "api/games/topdeals/" + limit + "/" + sort;
}
export const urlGetFreeGamesBySort = (limit, sort) => {
    return url_host + "api/games/freetoplay/" + limit + "/" + sort;
}
export const urlGetMostRecentsGamesBySort = (limit, sort) => {
    return url_host + "api/games/mostrecents/" + limit + "/" + sort;
}
export const urlGetGameByName = (game_name) => {
    return url_host + "api/games/search/" + game_name;
}
export const urlGetGameByNameBySort = (game_name, sort) => {
    return url_host + "api/games/search/" + game_name + "/" + sort;
}
export const urlGetMostPopularGames = (limit) => {
    return url_host + "api/games/popular/" + limit;
}
export const urlGetMostPopularGamesBySort = (limit, sort) => {
    return url_host + "api/games/popular/" + limit + "/" + sort;
}
// GAME INFO
export const urlGetGameById = (game_id) => {
    return url_host + "api/game/" + game_id;
}
export const urlGetGameMedia = (game_id) => {
    return url_host + "api/game/media/" + game_id;
}

// TAGS
export const urlGetGenreGames = (genre_id, sort) => {
    return url_host + "api/games/" + genre_id + "/" + (sort ? sort : "");
}

// USERS
export const urlSignup = () => {
    return url_host + "api/users/signup";
}
export const urlSignin = () => {
    return url_host + "api/users/signin";
}
export const urlWishlist = () => {
    return url_host + "api/users/wishlist";
}
export const urlGetWishlistById = () => {
    return url_host + "api/users/getwishlist";
}
export const urlGetWishlistByUserId = (user_id) => {
    return url_host + "api/user/" + user_id + "/wishlist";
}
export const urlDeleteGameWishlistByUserId = (user_id, game_id) => {
    return url_host + "api/user/" + user_id + "/wishlist/" + game_id;
}