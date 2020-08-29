import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav className="header">
      <Link className="header__logo" to="/">
        <img
          className="header__logo-img"
          src="http://via.placeholder.com/200x150"
          alt="Logo Clothing Store"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <FontAwesomeIcon className="fa-search" icon="search" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span>My Account</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <FontAwesomeIcon icon="shopping-cart" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
