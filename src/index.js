import houseToRent from './houseToRent';
import createCard from './createCard';

const cards = document.querySelector('.cards');

const render = (array) => {
  cards.innerHTML = '';
  array.forEach((house) => {
    createCard(cards, house.name, house.img, house.desc);
  });
};

const checkIfEmpty = (array) => {
  if (array.length === 0) {
    cards.innerHTML = 'No house';
  } else {
    render(array);
  }
}

// On change select (all / flat / house)
const select = document.querySelector('.select');

select.addEventListener('click', () => {
  const userInput = select.value;
  if (userInput === 'All') {
    render(houseToRent);
  } else {
    const houses = houseToRent.filter((house) => house.type === userInput);
    checkIfEmpty(houses);
  }
});

// On search (full text search)
const textInput = document.querySelector('.search-input');
textInput.addEventListener('input', () => {
  const userValueInput = textInput.value.toLowerCase();
  const houses = houseToRent.filter((house) => house.name.toLowerCase().includes(userValueInput));
  checkIfEmpty(houses);
});

// On change (Show only available)
const checkbox = document.querySelector('.available-checkbox');
checkbox.addEventListener('click', () => {
  const checkboxValue = checkbox.checked;
  if (checkboxValue) {
    const houses = houseToRent.filter((house) => house.available);
    checkIfEmpty(houses);
  } else {
    render(houseToRent);
  }
});

// If all house is rent, show a specific message
if (houseToRent.every((house) => !house.available)) {
  cards.innerHTML = 'No available house';
} else {
  render(houseToRent);
}
