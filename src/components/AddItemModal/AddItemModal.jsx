import React, { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ closeModal, activeModal, isOpen, onAddItem }) {
  const [clothName, setClothName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleClothNameChange = (evt) => {
    console.log(evt.target.value);
    setClothName(evt.target.value);
  };

  const handleImageLinkChange = (evt) => {
    console.log(evt.target.value);
    setImageLink(evt.target.value);
  };

  const handleWeatherTypeChange = (evt) => {
    console.log(evt.target.value);
    setWeatherType(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ clothName, imageLink, weatherType });
  };

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
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;