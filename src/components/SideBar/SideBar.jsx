import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ handleLogOut, handleChangeProfileClick }) {
  return (
    <section>
      <div className="sidebar">
        <img src={avatar} alt="Default avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <div className="sidebar_profile">
        <button
          className="sidebar_profile-button"
          onClick={handleChangeProfileClick}
          type="button"
        >
          Change profile data
        </button>
        <button
          className="sidebar_profile-button"
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
