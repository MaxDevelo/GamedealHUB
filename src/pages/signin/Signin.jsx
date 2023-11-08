import React from "react";

import Header from "@/components/Header/Header";
import { signinUser } from "@/auth";
import { Form, redirect } from "react-router-dom";
import "./signin.scss";

export const getUser = async ({ request }) => {
  let formData = await request.formData();
  let data = Object.fromEntries(formData);

  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  // Redirect user when he searchs game in login page
  if (search) {
    return redirect("/category/most-popular?" + url.searchParams);
  }

  return await signinUser({ email: data["email"], password: data["password"] })
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      return redirect("/signin");
    });
};

export default function Signin() {
  return (
    <div className="signinPage">
      <Header type="" />
      <div className="container">
        <div className="authform">
          <h2>Log in</h2>
          <Form method="POST" action="/signin">
            <fieldset>
              <label>Email</label>
              <input type="email" name="email" required />

              <label>Password</label>
              <input type="password" name="password" required />
            </fieldset>

            <button>Signin</button>
          </Form>
        </div>
        <div className="rigth-image"></div>
      </div>
    </div>
  );
}
