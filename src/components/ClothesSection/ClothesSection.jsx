import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
  currentUser,
  isLoggedIn,
}) {
  const isOwnClothingItems = clothingItems.filter(
    (item) => item?.owner === currentUser?._id
  );

  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <p className="clothes__section-title"> Your Items</p>
        <button
          className="clothes__section-button"
          onClick={handleAddClick}
          type="button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
        {isOwnClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id ? item._id : Math.random()}
              item={item}
              handleCardClick={handleCardClick}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
