import "./ItemModal.css";

function ItemModal({ card, closeModal, isOpen, handleDeleteItem }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={closeModal}
          className="modal__close modal__close_type_image"
          type="button"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer-container">
          <div className="modal__footer">
            <h2 className="modal__image-caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            className="modal__footer-button"
            type="submit"
            onClick={handleDeleteItem}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
