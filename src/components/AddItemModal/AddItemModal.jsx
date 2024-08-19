import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ closeModal, activeModal, isOpen }) {
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "add-garment"}
    >
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          Hot{" "}
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="weatherType"
          />
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          Warm{" "}
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weatherType"
          />
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          Cold{" "}
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weatherType"
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
