initialCards = [
    {
        name: 'Valle de Yosemite', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg'
    },
    {
        name: 'Lago Louise', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg'
    },
    {
        name: 'Montañas Calvas', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg'
    },
    {
        name: 'Latemar', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg'
    },
    {
        name: 'Parque Nacional de la Vanoise', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg'
    },
    {
        name: 'Latemar', 
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg'
    }
]

initialCards.forEach((item) => {
    console.log(item.name);
});

const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#edit-popup');
const closeButton = popupEdit.querySelector('.popup__close');
const cardContainer = document.querySelector('.cards__list');

//Parte 5: Acceso al modal de imágenes
const popupImage = document.querySelector('#image-popup');
const modalImage = popupImage.querySelector('.popup__image'); // Imagen del modal
const modalCaption = popupImage.querySelector('.popup__caption'); // Caption del modal
const closeImageButton = popupImage.querySelector('.popup__close');

closeImageButton.addEventListener('click', () => {
    closeModal(popupImage);
});


function openModal(modal) {
    modal.classList.add('popup_is-opened');
};
function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
};

editButton.addEventListener('click', () => {
    openModal(popupEdit);
});

closeButton.addEventListener('click', () => {
    closeModal(popupEdit);
});

function fillProfileForm(){
    // 1. Acceder a los valores actuales del perfil
    const currentName = document.querySelector('.profile__title').textContent;
    const currentJob = document.querySelector('.profile__description').textContent;
    // 2. Obtener  los campos del formulario con esos valores
    const nameInput = popupEdit.querySelector('.popup__input_type_name');
    const jobInput = popupEdit.querySelector('.popup__input_type_description');
    // 3. Copiar los valores a los campos
    nameInput.value = currentName;
    jobInput.value = currentJob;
}

function handleOpenEditModal() { 
    fillProfileForm();
    openModal(popupEdit);
};
editButton.addEventListener('click', handleOpenEditModal);

// Vamos a buscar el formulario en el DOM
let formElement = document.querySelector('#edit-profile-form');

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = popupEdit.querySelector('.popup__input_type_name');
    let jobInput = popupEdit.querySelector('.popup__input_type_description');

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    const profileName = document.querySelector('.profile__title');
    const profileJob = document.querySelector('.profile__description');

    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    closeModal(popupEdit);

};

formElement.addEventListener('submit', handleProfileFormSubmit);

function getCardElement(name='Unnamed place', link='./images/placeholder.jpg') {
    const cardTemplate = document
    .querySelector('#card-template')
    .content
    .querySelector('.card');
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    //Alternar el estado del botón de "me gusta"
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_is-active');
    });

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
    });
    cardImage.addEventListener('click', () => {
    modalImage.src = cardImage.src;
    modalImage.alt = cardImage.alt;
    modalCaption.textContent = cardTitle.textContent;
    openModal(popupImage);
    });

    return cardElement;
};

function renderCard(name, link,container) {
    const cardElement = getCardElement(name, link);
    container.prepend(cardElement);
};

initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardContainer);
});

// Parte 2: Añadir segunda ventana emergente
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#new-card-popup');
const closeAddButton = popupAdd.querySelector('.popup__close');
//Acceder al formulario de la ventana emergente
const addCardForm = popupAdd.querySelector('#new-card-form');
//Acceder a los campos del formulario
const placeInput = popupAdd.querySelector('.popup__input_type_card-name');
const linkInput = popupAdd.querySelector('.popup__input_type_url');

function fillPlaceForm(){
    placeInput.value = '';
    linkInput.value = '';
};

function handleOpenAddModal() {
    fillPlaceForm();
    openModal(popupAdd);
};


addButton.addEventListener('click', handleOpenAddModal);

closeAddButton.addEventListener('click', () => {
    closeModal(popupAdd);
});

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    renderCard(placeInput.value, linkInput.value, cardContainer);
    addCardForm.reset();
    closeModal(popupAdd);

};

addCardForm.addEventListener('submit', handleCardFormSubmit);