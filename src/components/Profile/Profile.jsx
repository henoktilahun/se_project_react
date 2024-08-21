import "./Profile.css"
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidear">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection handleCardClick={handleCardClick} clothingItems={clothingItems} />
      </section>
    </div>
  );
}

export default Profile;
