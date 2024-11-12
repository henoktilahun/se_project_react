import { useState } from "react";
import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleRegistrationClick,
  isLoggedIn,
  currentUser,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [isMobileMenuOpened, toggleMobileMenu] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleMenuClick = () => {
    toggleMobileMenu(!isMobileMenuOpened);
  };

  console.log("isLoggedIn: " + isLoggedIn);
  console.log(currentUser);
  return (
    <header className="header">
      <div className="header__logo-date-container">
        <Link to="/">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div
        className={
          isMobileMenuOpened
            ? "header__button-avatar-container header__button-avatar-container-active"
            : "header__button-avatar-container"
        }
      >
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__button"
            >
              + Add Cloth
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-avatar">
                <p className="header__username">{currentUser.name}</p>
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleRegistrationClick}
              type="button"
              className="header__button"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__button"
            >
              Log In
            </button>
          </>
        )}
      </div>
      <button onClick={handleMenuClick} className="header__menu" type="button">
        <span
          className={
            isMobileMenuOpened
              ? "header__menu_type_bar header__menu_type_bar-active"
              : "header__menu_type_bar"
          }
        ></span>
        <span
          className={
            isMobileMenuOpened
              ? "header__menu_type_bar header__menu_type_bar-active"
              : "header__menu_type_bar"
          }
        ></span>
      </button>
    </header>
  );
}

export default Header;
