import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeModal,
  activeModal,
  isOpen,
  onAddItem,
  handleRegistration,
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");

  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);
  // const handleNameChange = (e) => setName(e.target.value);
  // const handleAvatarChange = (e) => setAvatar(e.target.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // onAddItem(evt, { name, imageUrl, weather }, resetForm);
    // HANDLE LOGIN logic
    handleRegistration(data);
    console.log("Registr:", { data });
  };

  // const resetForm = () => {
  //   set("");
  //   setPassword("");
  //   setName("");
  //   setAvatar("");
  // };

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
    </ModalWithForm>
  );
}

export default RegisterModal;
