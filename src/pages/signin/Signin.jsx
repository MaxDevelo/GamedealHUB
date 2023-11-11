import React, { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import { signinUser } from "@/auth";
import { Form, redirect, useNavigate } from "react-router-dom";
import "./signin.scss";

export const getUser = async ({ request, setError, navigate }) => {
  try {
    await signinUser({ email: request.email.value, password: request.password.value });
    navigate('/')
  } catch (error) {
    setError(error.message);
  }
  
};

export default function Signin() {
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await getUser({ request: event.target, setError, navigate });
  };

  useEffect(() => {
  }, [error]);
  return (
    <div className="signinPage">
      <Header type="" />
      <div className="container">
        <div className="authform">
          <h2>Log in</h2>
          <Form method="POST" action="/signin" onSubmit={handleFormSubmit}>
            <fieldset>
              <label>Email</label>
              <input type="email" name="email" required />

              <label>Password</label>
              <input type="password" name="password" required />
            </fieldset>

            <button>Signin</button>
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
