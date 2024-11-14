import { useContext } from "react";
import avatar from "../../assets/avatar.png";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleLogOut, handleChangeProfileClick }) {
  const currentUser = useContext(CurrentUserContext)
  return (
    <section>
      <div className="sidebar">
        <img src={currentUser.avatar} alt="Default avatar" className="sidebar__avatar" />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__profile">
        <button
          className="sidebar__profile-button"
          onClick={handleChangeProfileClick}
          type="button"
        >
          Change profile data
        </button>
        <button
          className="sidebar__profile-button"
          onClick={handleLogOut}
          type="button"
        >
          Log out
        </button>
      </div>
    </section>
  );
}

export default SideBar;
