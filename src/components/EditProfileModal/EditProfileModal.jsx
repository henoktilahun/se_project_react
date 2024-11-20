import React, { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ closeModal, activeModal, handleChangeProfile }) {
  const currentUser = useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
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
    handleChangeProfile(data);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "change-profile"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="editName"
          name="name"
          placeholder={"Your Name"}
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="editUrl"
          name="avatar"
          placeholder={"Avatar URL"}
          onChange={handleChange}
          value={data.avatar}
        />
      </label>
      <button className="change__profile-submit" type="submit">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default EditProfileModal;
