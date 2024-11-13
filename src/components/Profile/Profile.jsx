import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
  handleLogOut,
  currentUser,
  handleChangeProfile,
  handleChangeProfileClick,
}) {
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
        />
      </section>
    </div>
  );
}

export default Profile;
