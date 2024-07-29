import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.svg";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <div className="header__logo-date-container">
        <img src={logo} alt="" className="header__logo" />
        <p className="header__date-location">DATE, LOCATION</p>
      </div>
      <div className="header__button-avatar-container">
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
    </header>
  );
}

export default Header;
