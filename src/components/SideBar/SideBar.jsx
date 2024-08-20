import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
