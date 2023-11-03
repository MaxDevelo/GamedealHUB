import React from "react";

import Header from "@/components/Header/Header";
import useAuth, { signupUser } from "@/auth";
import { Form, redirect } from "react-router-dom";
import "./signup.scss";

export const createUser = async ({ request }) => {
  let formData = await request.formData();
  let data = Object.fromEntries(formData);
  return await signupUser({
    lastname: data["lastname"],
    firstname: data["firstname"],
    name: data["name"],
    email: data["email"],
    password: data["password"],
    isSubscribe: 0,
  })
    .then(() => {
      return redirect("/signin");
    })
    .catch((error) => {
      console.error(error);
      return redirect("/signup");
    });
};

export default function Signup() {
  return (
    <div className="authPage">
      <Header type="" />
      <div className="container">
        <div className="authform">
          <h2>Register</h2>
          <Form method="POST" action="/signup">
            <fieldset>
              <label>Lastname</label>
              <input type="text" name="lastname" required />

              <label>Firsname</label>
              <input type="text" name="firstname" required />

              <label>Name</label>
              <input type="text" name="name" required />

              <label>Email</label>
              <input type="email" name="email" required />

              <label>Password</label>
              <input type="password" name="password" required />

              <label>Confirm password</label>
              <input type="password" name="passwordCheck" required />
            </fieldset>

            <button>Signup</button>
          </Form>
        </div>
        <div className="rigth-image"></div>
      </div>
    </div>
  );
}
