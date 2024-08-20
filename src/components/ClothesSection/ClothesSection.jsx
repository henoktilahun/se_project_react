import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection() {
  return (
    <div className="clothes__section">
      <div>
        <p>Your Items</p>
        <button>+ Add Items</button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // todo: pass as prop
              //   onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
