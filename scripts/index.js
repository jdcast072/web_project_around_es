// 1. IMPORTS
import { openModal, closeModal } from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// 2. DATOS INICIALES
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// 3. SELECTORES DEL DOM
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const cardContainer = document.querySelector(".cards__list");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const popupEdit = document.querySelector("#edit-popup");
const closeButton = popupEdit.querySelector(".popup__close");
const formElement = popupEdit.querySelector(".popup__form");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_description");

const popupAdd = document.querySelector("#new-card-popup");
const closeAddButton = popupAdd.querySelector(".popup__close");
const addCardForm = popupAdd.querySelector("#new-card-form");
const placeInput = popupAdd.querySelector(".popup__input_type_card-name");
const linkInput = popupAdd.querySelector(".popup__input_type_url");

const popupImage = document.querySelector("#image-popup");
const modalImage = popupImage.querySelector(".popup__image");
const modalCaption = popupImage.querySelector(".popup__caption");
const closeImageButton = popupImage.querySelector(".popup__close");

// 4. CONFIGURACIÓN
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

// 5. FUNCIONES AUXILIARES
function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
// Función con valores vacíos del formulario al abrir el modal
function fillPlaceForm() {
  placeInput.value = "";
  linkInput.value = "";
}
// Visualizar la imagen en el modal al hacer click en la imagen de la tarjeta
function handleCardClick(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  modalCaption.textContent = name;
  openModal(popupImage);
}

// Crear tarjeta a partir de un objeto con los datos de la tarjeta y el selector del template
function createCard(item) {
  const card = new Card(item, "#card-template", handleCardClick);
  return card.generateCard();
}

// Renderizar la tarjeta en el contenedor de tarjetas
function renderCard(item, container) {
  const cardElement = createCard(item);
  container.prepend(cardElement);
}

// Abrir el modal de edición de perfil con los datos actuales del perfil
function handleOpenEditModal() {
  fillProfileForm();
  openModal(popupEdit);
}

// Cerrar el modal de edición de perfil al hacer click en el botón de cerrar
function handleOpenAddModal() {
  fillPlaceForm();
  openModal(popupAdd);
}

// 6. HANDLERS DE FORMULARIOS
// Función para manejar el envío del formulario de edición de perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(popupEdit);
}

// Función para manejar el envío del formulario de nueva tarjeta
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(
    {
      name: placeInput.value,
      link: linkInput.value,
    },
    cardContainer,
  );

  addCardForm.reset();
  closeModal(popupAdd);
}

// 7. EVENT LISTENERS
// Abrir el modal de edición de perfil al hacer click en el botón de editar perfil
editButton.addEventListener("click", handleOpenEditModal);
closeButton.addEventListener("click", () => {
  closeModal(popupEdit);
});

// Abrir el modal de nueva tarjeta al hacer click en el botón de agregar tarjeta
addButton.addEventListener("click", handleOpenAddModal);
closeAddButton.addEventListener("click", () => {
  closeModal(popupAdd);
});

// Cerrar el modal de imagen al hacer click en el botón de cerrar
closeImageButton.addEventListener("click", () => {
  closeModal(popupImage);
});

// Agregar event listeners para el envío de los formularios
formElement.addEventListener("submit", handleProfileFormSubmit);
addCardForm.addEventListener("submit", handleCardFormSubmit);

// 8. RENDER INICIAL
initialCards.forEach((item) => {
  renderCard(item, cardContainer);
});

// 9. VALIDADORES

// Seleccionar todos los formularios en la página
const forms = Array.from(
  document.querySelectorAll(validationConfig.formSelector),
);

// Crear un nuevo validador para cada formulario y agregar los event listeners de validación
forms.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);

  validator.setEventListeners();
});
