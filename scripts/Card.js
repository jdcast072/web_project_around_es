class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }
  
  //Alternar el estado del botón de "me gusta"
  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  };
  //Eliminar la tarjeta al hacer click en el botón de eliminar
  _handleDeleteCard(){
    this._cardElement.remove();
    this._cardElement = null;
  };
  //Visualizar la imagen en el modal al hacer click en la imagen de la tarjeta
  _handlePreviewImage() {
    this._handleCardClick(this._name, this._link);
  };
  //Conjunto de métodos de event listeners
  _setEventListeners() {
    //Evento para dar like a la tarjeta
    this._likeButtonIcon.addEventListener('click', (evt) => {
        this._handleLikeButton();
    });
    //Evento para eliminar la tarjeta
    this._deleteButton.addEventListener('click', (evt) => {
        this._handleDeleteCard();
    });
    //Evento para visualizar la imagen en el modal
    this._cardImage.addEventListener('click', () => {
        this._handlePreviewImage();
    });
  };
    //Método para crear la tarjeta
    generateCard() {
        this._element = this._getTemplate();

    this._cardImage =
      this._element.querySelector(".card__image");

    this._cardTitle =
      this._element.querySelector(".card__title");

    this._likeButtonIcon =
      this._element.querySelector(".card__like-button");

    this._deleteButton =
      this._element.querySelector(".card__delete-button");

    this._cardTitle.textContent = this._name;

    this._cardImage.src = this._link;

    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
    };
};

export default Card;