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

function handleOpenEditModal(evt) { 
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