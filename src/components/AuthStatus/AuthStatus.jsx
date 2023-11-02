import React from 'react';
import useAuth, { signout } from '@/auth';
import { useNavigate } from "react-router-dom";
import AccountLogo from '../../assets/img/plateforms-logo/account.png'
const AuthStatus = () => {
  const user = useAuth((state) => state.user);
  const navigate = useNavigate();
  const clickLogout = async () => {
    await signout();
    navigate(0)
  }
  if (user === null) {
    return (
      <div>
        <a className="authButton" href="/signin">Sign in</a>
        <span className="separe">/</span>
        <a className="authButton"  href="/signup">Register</a>
      </div>
    );
  } else {
    return (
      <div>
        <a className="authAccount"  href="/wishlist">Wishlist</a>
        <a className="authAccount"  href="/account">Account</a>
        <button className="logoutButton" onClick={clickLogout}>Sign out</button>
      </div>
    );
  }
};
 
export default AuthStatus;