import houseToRent from './houseToRent';
import createCard from './createCard';

const cards = document.querySelector('.cards');

const render = (array) => {
  cards.innerHTML = '';
  array.forEach((house) => {
    createCard(cards, house.name, house.img, house.desc);
  });
};

// On change select (all / flat / house)

// On search (full text search)

// On change (Show only available)

// If all house is rent, show a specific message
