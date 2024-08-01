import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__name-container">
        <h2 className="card__name">{item.name}</h2>
      </div>
      <img
        onClick={handleCardClick}
        src={item.link}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
