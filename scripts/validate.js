const inputs = formElement.querySelectorAll('.popup__input');

const showInputError = (inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error-active');
};

const hideInputError = (inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error-active');
}

const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => {
        return !input.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_disabled');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__button_disabled');
        buttonElement.disabled = false;
    }
};

const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        if (activePopup) {
            closeModal(activePopup);
        }
    }
};

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
   if (!formElement.checkValidity()) {
        inputs.forEach((inputElement) => {
            if (!inputElement.validity.valid) {
                showInputError(inputElement, inputElement.validationMessage);
            } else {
                hideInputError(inputElement);
            }
        });
    }
});

inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        if (!inputElement.validity.valid) {
            showInputError(inputElement, inputElement.validationMessage);
        } else {
            hideInputError(inputElement);
        }
    });
});

