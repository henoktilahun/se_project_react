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
  // Checking if the current user is the owner of the current clothing item
  //const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  // const itemDeleteButtonClassName = `modal__footer-button ${
  //   isOwn ? "modal__footer-button_visible" : "modal__footer-button_hidden"
  // }`;

  const isOwnClothingItems = clothingItems.filter(
    (item) => item?.owner === currentUser?._id
  );

  // console.log(isOwnClothingItems);

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
