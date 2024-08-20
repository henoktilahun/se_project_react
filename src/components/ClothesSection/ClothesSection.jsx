import "./ClothesSection.css"
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({handleCardClick, clothingItems}) {
  return (
    <div className="clothes__section">
      <div>
        <p>Your Items</p>
        <button>+ Add Items</button>
      </div>
      <ul className="clothes__section-items">
        {clothingItems.map((item) => {
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
