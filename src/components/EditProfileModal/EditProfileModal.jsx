import React, { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({
  closeModal,
  activeModal,
  isOpen,
  onAddItem,
  handleChangeProfile,
}) {
  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangeProfile(data);
    console.log("Change Profile Data:", { data });
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
      <label className="modal__label" htmlFor="name">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder={currentUser.name}
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
          placeholder={currentUser.avatar}
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
