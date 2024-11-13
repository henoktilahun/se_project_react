import "./ItemCard.css";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const openCardOnClick = () => {
    handleCardClick(item);
  };
  
  const handleLike = () => {
    console.log("hand like")
    console.log(item)
    handleCardLike(item)
  }

  return (
    <li className="card">
      <div className="card__name-container">
        <div className="card__name-heading">
          <h2 className="card__name">{item.name}</h2>
          <button
            onClick={handleLike}
            className="card__like"
            type="button"
          ></button>
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
