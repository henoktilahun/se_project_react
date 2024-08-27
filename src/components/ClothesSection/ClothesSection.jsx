import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  selectedCard,
}) {
  console.log(clothingItems);
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
        {clothingItems
          .filter((item) => {
            return item._id !== selectedCard._id;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
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
