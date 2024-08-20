import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const openCardOnClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__name-container">
        <h2 className="card__name">{item.name}</h2>
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
