import React from "react";

import Header from "@/components/Header/Header";
import useAuth, {signupUser} from "@/auth";
import { Form, redirect } from "react-router-dom";
import "./signup.scss";

export const createUser = async ({ request }) => {
  let formData = await request.formData();
  let data = Object.fromEntries(formData);
  
  return await signupUser({lastname: data['lastname'], firstname: data['firstname'], name: data['name'], email: data['email'], password: data['password'], isSubscribe: 0})
    .then(() => {
      return redirect('/')
    })
    .catch((error) => {
      console.error(error);
      return redirect('/signup')
    });
};

export default function Signup() {
  return (
    <div className="homePage">
      <Header type="" />
      <div className="authform">
        <h2>Signup</h2>
        <Form method="POST" action="/signup">
          <fieldset>
            <label>Lastname</label>
            <input type="text" name="lastname" required />

            <label>Firsname</label>
            <input type="text" name="firstname" required />

            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="text" name="email" required />

            <label>Password</label>
            <input type="password" name="password" required />

            <label>Confirm password</label>
            <input type="password" name="passwordCheck" required />
          </fieldset>

          <button>Signup</button>
        </Form>
      </div>
    </div>
  );
}
