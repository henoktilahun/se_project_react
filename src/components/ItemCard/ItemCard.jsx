import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, handleCardClick, handleCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((_id) => _id === currentUser._id);
  const itemLikeButtonClassName = `card__like ${
    isLiked ? "card__like-selected" : ""
  }`;

  const openCardOnClick = () => {
    handleCardClick(item);
  };

  const handleLike = () => {
    handleCardLike({ _id: item._id, isLiked: isLiked });
  };

  return (
    <li className="card">
      <div className="card__name-container">
        <div className="card__name-heading">
          <h2 className="card__name">{item.name}</h2>
          {isLoggedIn && (
            <button
              onClick={handleLike}
              className={itemLikeButtonClassName}
              type="button"
            ></button>
          )}
        </div>
      </div>
      <img
        onClick={openCardOnClick}
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
