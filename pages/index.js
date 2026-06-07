import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../utils/constants.js";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#new-card-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(
  ".popup__input_type_description",
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__description",
});

const popupWithImage = new PopupWithImage("#image-popup");

const createCard = (data) => {
  const card = new Card(data, "#card-template", (cardData) => {
    popupWithImage.open(cardData);
  });

  return card.generateCard();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  ".cards__list",
);

const editFormValidator = new FormValidator(
  validationConfig,
  editForm,
);
const addCardFormValidator = new FormValidator(
  validationConfig,
  addCardForm,
);

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  ({ name, description }) => {
    userInfo.setUserInfo({ name, about: description });
    editProfilePopup.close();
  },
);

const addCardPopup = new PopupWithForm(
  "#new-card-popup",
  (inputValues) => {
    cardSection.addItem(
      createCard({
        name: inputValues["place-name"],
        link: inputValues.link,
      }),
    );
    addCardPopup.close();
  },
);

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupWithImage.setEventListeners();
editFormValidator.setEventListeners();
addCardFormValidator.setEventListeners();
cardSection.renderItems();

editButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  aboutInput.value = currentUser.about;
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});
