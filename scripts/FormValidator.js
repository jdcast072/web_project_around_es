class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector),
    );
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector,
    );
  }
  //Función para mostrar el mensaje de error en el input
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`,
    );

    inputElement.classList.add(this._config.inputErrorClass);

    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._config.errorClass);
  }
  //Función para ocultar el mensaje de error del input si el formulario es válido
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`,
    );

    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }
  //Función para verificar la validez del input para mostrar (showInputError) u ocultar(hideInputError) el mensaje de error
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  //Función para recorrer los campos si hay algún input no válido en el formulario
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //Función para activar o desactivar el botón de submit dependiendo de la validez del formulario
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);

      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);

      this._buttonElement.disabled = false;
    }
  }
  //Función para agregar los event listeners a cada input del formulario
  setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}

export default FormValidator;