import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__icon" src="./imdb-logo.png" />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span className="nav__links">Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span className="nav__links">Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span className="nav__links">Upcoming</span>
        </Link>
      </div>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
