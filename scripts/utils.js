function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");

    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

function openModal(popup) {
  popup.classList.add("popup_is-opened");

  document.addEventListener("keydown", handleEscClose);

  popup.addEventListener("click", closePopupByOverlay);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", handleEscClose);

  popup.removeEventListener("click", closePopupByOverlay);
}

export { openModal, closeModal };
