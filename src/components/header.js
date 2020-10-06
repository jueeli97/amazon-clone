import React from "react";
import "./header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* LOGO */}
      <Link to="/home">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />

        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header-option">
            <span className="header-optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
          </div>

          <div className="header-option">
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>

      <div className="header-nav">
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
          </div>

          <div className="header-option">
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Yours</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionLineThree header-basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
