// booksList.test.js

// Імпортуємо функцію render для тестування
const booksList = require('../js/view');

// Імітуємо DOM-елемент для тестів
document.body.innerHTML = '<section id="books" class="books"></section>';

// Масив книг для тестування
const books = [
  {
    title: "1984",
    author: "Джордж Орвелл",
    year: 1949,
    genre: "Антиутопія",
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Дж. К. Роулінг",
    year: 1997,
    genre: "Фентезі",
  },
];
