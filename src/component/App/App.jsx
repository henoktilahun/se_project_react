import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");

  const handleAddClick = () => {
    console.log("click");
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    console.log("click");
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        closeModal={closeModal}
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
            Hot <input type="radio" className="modal__radio-input" id="hot" />
          </label>
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="warm"
          >
            Warm <input type="radio" className="modal__radio-input" id="warm" />
          </label>
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="cold"
          >
            Cold <input type="radio" className="modal__radio-input" id="cold" />
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
