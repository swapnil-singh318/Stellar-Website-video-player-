import React, { useState } from "react";
import "./Header.css";
import logo from '../../assets/logo.png'
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  function logoClickHandler() {
    setInputSearch("");
  }

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src={logo}
            alt="logo"
            onClick={logoClickHandler}
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          className="header_icon"
          alt="avatar"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.231751809.1650813238"
        />
      </div>
    </div>
  );
}

export default Header;
