function createCard(
  div,
  title = 'Untitled Place',
  imageUrl = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
  desc = '',
) {
  const card = document.createElement('div');
  card.classList.add('card');
  div.appendChild(card);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  card.appendChild(cardHeader);

  const cardImg = document.createElement('div');
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add('card-img');
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = title;
  cardBody.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.innerText = desc;
  cardBody.appendChild(cardDescription);

  const button = document.createElement('button');
  button.classList.add('card-button');
  button.innerText = 'I want it! ♥️';
  cardBody.appendChild(button);
}

export default createCard;
