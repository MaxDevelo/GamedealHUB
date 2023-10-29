import {
    urlSignup,
    urlSignin
  } from "./config.js";
  import useAuth from '@/auth';

  export const signup =  (lastname, firstname, name, email, password, isSubscribe) => {
    const token = useAuth.getState().token;
    const headers = {
        'Content-Type': 'application/json',
    };
    if(token) {
        headers['Authorization'] = `User ${token}`;
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
        method: 'POST',
        headers: headers,
        body: body,
      })
      .then(((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur lors de l'inscription");
        }
      }))
      .then((data) => {
        return {data, token};
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const signin =  (email, password) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
        email,
        password
      });
    return fetch(urlSignin(), {
        method: 'POST',
        headers: headers,
        body: body,
      })
      .then(((response) => {
        if(response.ok) {
          return response.json();
        } 
      }))
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  };
  
