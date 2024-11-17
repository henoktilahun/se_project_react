import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
function LoginModal({
  closeModal,
  activeModal,
  handleLogin,
  handleRegistrationClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin({ email, password }, resetForm);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "login"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="loginEmail"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className="modal__label">
        password{" "}
        <input
          type="password"
          className="modal__input"
          id="loginPassword"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <div className="modal__login-buttons">
        <button className="modal__login-button" type="submit">
          Log in
        </button>
        <button
          className="modal__register-button"
          type="button"
          onClick={handleRegistrationClick}
        >
          {" "}
          or Rgister
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
