import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  closeModal,
  activeModal,
  isOpen,
  onAddItem,
  handleLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // onAddItem(evt, { name, imageUrl, weather }, resetForm);
    // HANDLE LOGIN logic
    console.log("Login:", { email, password });
    handleLogin({ email, password });
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
      <label className="modal__label" htmlFor="email">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className="modal__label" htmlFor="password">
        password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
