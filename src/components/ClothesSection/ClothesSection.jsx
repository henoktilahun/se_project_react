import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
}) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id ? item._id : Math.random()}
              item={item}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
