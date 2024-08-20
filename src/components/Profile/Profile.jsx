import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidear">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection />
      </section>
    </div>
  );
}

export default Profile;
