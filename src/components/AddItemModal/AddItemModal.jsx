import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ closeModal, activeModal, isOpen, onAddItem }) {
  const [name, setClothName] = useState("");
  const [imageUrl, setImageLink] = useState("");
  const [weather, setWeatherType] = useState("");

  const handleClothNameChange = (evt) => {
    setClothName(evt.target.value);
  };

  const handleImageLinkChange = (evt) => {
    setImageLink(evt.target.value);
  };

  const handleWeatherTypeChange = (evt) => {
    setWeatherType(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(evt, { name, imageUrl, weather}, resetForm);
  };

  const resetForm = () => {
    setClothName("");
    setImageLink("");
    setWeatherType("");
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "add-garment"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleClothNameChange}
          value={name}
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleImageLinkChange}
          value={imageUrl}
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
            onChange={handleWeatherTypeChange}
            value="Hot"
          />
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          Warm{" "}
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weatherType"
            onChange={handleWeatherTypeChange}
            value="Warm"
          />
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          Cold{" "}
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weatherType"
            onChange={handleWeatherTypeChange}
            value="Cold"
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
