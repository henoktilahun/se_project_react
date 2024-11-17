import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
  handleLogOut,
  handleChangeProfile,
  handleChangeProfileClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleLogOut={handleLogOut}
          handleChangeProfile={handleChangeProfile}
          handleChangeProfileClick={handleChangeProfileClick}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          selectedCard={selectedCard}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
