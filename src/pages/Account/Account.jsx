import React from "react";

import Header from "@/components/Header/Header";
import useAuth from "@/auth";
import "./account.scss";
import logoAccount from "@/assets/img/logo-account.png";

export default function Account() {
  const user = useAuth.getState().user;
  return (
    <div className="accountPage">
      <Header type="" />
      <div className="account-container">
        <img src={logoAccount} className="logo-account" />
        <h2>{user[0].name}</h2>
        <p className="dateCreatedAt">Member since : {user[0].created_at.split("T")[0]}</p>
      </div>
    </div>
  );
}
