import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-content">
        <h3>Best Game Price</h3>
        <p>Comparateur de Prix</p>
        <ul class="footer-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
