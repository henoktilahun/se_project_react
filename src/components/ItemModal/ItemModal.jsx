import { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ card, closeModal, isOpen, handleDeleteItem, selectedCard, currentUser }) {
  //const currentUser = useContext(CurrentUserContext)
  // Checking if the current user is the owner of the current clothing item
  console.log("current user:" + currentUser)
  console.log("Selected card: " + selectedCard)
  console.log("Slected card owner: " + selectedCard.owner)
  console.log("Current user id: " + currentUser._id)
  const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = (
    `modal__footer-button ${isOwn ? 'modal__footer-button_visible' : 'modal__footer-button_hidden'}`
  );

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
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
            className={itemDeleteButtonClassName}
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
