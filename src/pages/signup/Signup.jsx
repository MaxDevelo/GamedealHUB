import React, { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import useAuth, { signupUser } from "@/auth";
import { Form, useNavigate } from "react-router-dom";
import "./signup.scss";

export const createUser = async ({ request, setError, navigate }) => {
  try {
    await signupUser({
      lastname: request.lastname.value,
      firstname: request.firstname.value,
      name: request.name.value,
      email: request.email.value,
      password: request.password.value,
      isSubscribe: 0,
    })
    navigate("/signin");
  } catch (error) {
    setError(error.message);
  }
};

export default function Signup() {
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createUser({ request: event.target, setError, navigate });
  };

  useEffect(() => {}, [error]);
  return (
    <div className="authPage">
      <Header type="" />
      <div className="container">
        <div className="authform">
          <h2>Register</h2>
          <Form method="POST" action="/signup" onSubmit={handleFormSubmit}>
            <fieldset>
              <label>Lastname</label>
              <input type="text" name="lastname" required />

              <label>Firsname</label>
              <input type="text" name="firstname" required />

              <label>Username</label>
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
          <div id="error">
            <p>
              <em style={{ color: "red" }}>{error}</em>
            </p>
          </div>
        </div>
        <div className="rigth-image"></div>
      </div>
    </div>
  );
}
