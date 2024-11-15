import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeModal,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeModal}
          className="modal__close modal__close_type_form"
          type="button"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
