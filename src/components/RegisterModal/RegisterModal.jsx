import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeModal,
  activeModal,
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
    handleRegistration(data, resetForm);
  };

  const resetForm = () => {
    setData((prevData) => ({
      ...prevData,
      name: "",
      email: "",
      password: "",
      avatar: "",
    }));
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
      <label className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="registerEmail"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          required
        />
      </label>
      <label className="modal__label">
        password*{" "}
        <input
          type="password"
          className="modal__input"
          id="registerPassword"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        />
      </label>
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="registerName"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="registerUrl"
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
