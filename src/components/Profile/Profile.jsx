import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
  handleLogOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogOut={handleLogOut} />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          selectedCard={selectedCard}
        />
      </section>
    </div>
  );
}

export default Profile;
