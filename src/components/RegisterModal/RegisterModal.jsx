import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeModal,
  activeModal,
  isOpen,
  onAddItem,
  handleRegistration,
  handleLoginClick,
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "register"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="email">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        password*{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        />
      </label>
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label className="modal__label" htmlFor="url">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="url"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={data.avatar}
        />
      </label>
      <div className="modal__login-buttons">
        <button className="modal__login-button" type="submit">
          Next
        </button>
        <button
          className="modal__register-button"
          type="button"
          onClick={handleLoginClick}
        >
          {" "}
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
