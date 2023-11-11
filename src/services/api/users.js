import {
  urlSignup,
  urlSignin,
  urlWishlist,
  urlGetWishlistById,
  urlGetWishlistByUserId,
  urlDeleteGameWishlistByUserId,
} from "./config.js";
import useAuth from "@/auth";

export const signup = (
  lastname,
  firstname,
  name,
  email,
  password,
  isSubscribe
) => {
  const token = useAuth.getState().token;
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `User ${token}`;
  }
  const body = JSON.stringify({
    lastname,
    firstname,
    name,
    email,
    password,
    isSubscribe,
  });
  return fetch(urlSignup(), {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
    })
    .then((data) => {
      return { data, token };
    })
};
export const signin = (email, password) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    email,
    password
  });

  return fetch(urlSignin(), {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }
    })
};
export const wishlist = (user_id, game_id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    user_id,
    game_id,
  });
  return fetch(urlWishlist(), {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
export const get_wishlist_by_id = (user_id, game_id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    user_id,
    game_id,
  });
  return fetch(urlGetWishlistById(), {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
export const get_wishlist_by_user_id = (user_id) => {
  return fetch(urlGetWishlistByUserId(user_id))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
export const delete_game_wishlist_by_user_id = (user_id, game_id) => {
  return fetch(urlDeleteGameWishlistByUserId(user_id, game_id), {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
