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

function openModal(modal) {
  modal.classList.add("popup_is-opened");
//Agregar event listener para cerrar el modal con la tecla "Esc" cada vez que se abra un modal
  document.addEventListener("keydown", handleEscClose);
    //Agregar event listener para cerrar el modal haciendo click en el overlay cada vez que se abra un modal
  modal.addEventListener("click", closePopupByOverlay);
}

function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
    //Eliminar el event listener para la tecla "Esc" cada vez que se cierre un modal
    document.removeEventListener('keydown', handleEscClose);
    //Eliminar el event listener para cerrar el modal haciendo click en el overlay cada vez que se cierre un modal
    document.removeEventListener('click', closePopupByOverlay);
}

export { openModal, closeModal };
