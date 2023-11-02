import React from "react";

import Header from "@/components/Header/Header";
import useAuth from "@/auth";
import { Form, redirect } from "react-router-dom";
import "./account.scss";

export default function Account() {
  const user = useAuth.getState().user;

  return (
    <div className="accountPage">
      <Header type="" />
      <div className="account-container">
        <h2>Welcome {user[0].name} </h2>
      </div>
    </div>
  );
}
