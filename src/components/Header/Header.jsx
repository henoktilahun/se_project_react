import { useState } from "react";
import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [isMobileMenuOpened, toggleMobileMenu] = useState(false);

  const handleMenuClick = () => {
    toggleMobileMenu(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__logo-date-container">
        <img src={logo} alt="WTWR Logo" className="header__logo" />
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
        <button
          onClick={handleAddClick}
          type="button"
          className="header__button"
        >
          + Add Cloth
        </button>
        <div className="header__user-avatar">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
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
