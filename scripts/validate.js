const forms = document.querySelectorAll(".popup__form");

//Función para mostrar el mensaje de error en el input
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

//Función para ocultar el mensaje de error en el input en caso de que el formulario sea válido
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_active");
};

//Función para verificar la validez del input para mostrar (showInputError) u ocultar(hideInputError) el mensaje de error
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Función para recorrer los campos si hay algún input no válido en el formulario
const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => {
    return !input.validity.valid;
  });
};

//Función para activar o desactivar el botón de submit dependiendo de la validez del formulario
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.disabled = false;
  }
};

//Función para agregar los event listeners a cada input del formulario
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach( (inputElement) => {
    inputElement.addEventListener( "input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//Método forEach para recorrer cada formulario y ejecutar la función setEventListeners para cada uno de ellos
forms.forEach( (formElement) => {
  setEventListeners(formElement);
});


//Función para salir del modal con la tecla "Esc"
const handleEscClose = (event) => {
  if (event.key === "Escape") {
    const OpenedPopup = document.querySelector(".popup_is-opened");
    if (OpenedPopup) {
      closeModal(OpenedPopup);
    }
  }
};

//Función para salir del modal haciendo click en el overlay (superposición)
const closePopupByOverlay = (event) => {
  if (event.target.classList.contains("popup")) {
    closeModal(event.target);
  };
};