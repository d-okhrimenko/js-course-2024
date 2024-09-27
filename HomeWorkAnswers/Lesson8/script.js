/* Завдання: Написати програму, яка виводить список книг у бібліотеці на веб-сторінку */

const books = [
  { title: '1984', author: 'Джордж Орвелл', year: 1949, genre: 'Антиутопія' },
  {
    title: 'Гаррі Поттер і філософський камінь',
    author: 'Дж. К. Роулінг',
    year: 1997,
    genre: 'Фентезі'
  },
  {
    title: 'Гра престолів',
    author: 'Джордж Р. Р. Мартін',
    year: 1996,
    genre: 'Фентезі'
  },
  {
    title: 'Старий і море',
    author: 'Ернест Хемінгуей',
    year: 1952,
    genre: 'Пригодницький роман'
  },
  {
    title: 'Майстер і Маргарита',
    author: 'Михайло Булгаков',
    year: 1967,
    genre: 'Фантастика'
  },
  {
    title: 'Норвезький ліс',
    author: 'Муракамі Харукі',
    year: 1987,
    genre: 'Роман'
  },
  {
    title: 'Дюна',
    author: 'Френк Герберт',
    year: 1965,
    genre: 'Роман'
  }
];

const createBookListContainer = () => {
  const div = document.createElement('div');
  div.id = 'bookList';
  div.classList.add('bookList');
  document.body.appendChild(div);
};

createBookListContainer();

const createBookList = books =>
  books
    .map(
      ({ title, author, year, genre }) => `
    <div class="bookCard">
      <p class="bookTitle"><strong>Title:</strong> ${title}</p>
      <p class="bookAuthor"><strong>Author:</strong> ${author}</p>
      <p class="bookYear"><strong>Year:</strong> ${year}</p>
      <p class="bookGenre"><strong>Genre:</strong> ${genre}</p>
    </div>
  `
    )
    .join('');

const bookList = document.querySelector('#bookList');

bookList.innerHTML = createBookList(books);

/* Завдання: Написати програму, яка виводить список книг у бібліотеці на веб-сторінку. Програма повинна брати інформацію з масиву об’єктів, де кожен об’єкт представляє книгу, і динамічно додавати її в HTML.

Кроки для виконання завдання:

	1.	Створити масив об’єктів, де кожен об’єкт представляє книгу:
	•	Кожен об’єкт повинен містити наступні властивості: назва книги, автор, рік видання, жанр. (Приклад масиву наведено нижче)
	2.	Створити HTML-структуру для виведення списку книг:
	•	Додати контейнер (наприклад, <div id="bookList"></div>), в який буде додаватися інформація про книги.
	3.	Написати функцію для динамічного виведення книг:
	•	Функція повинна перебирати масив книг і для кожної книги створювати HTML-елемент (наприклад, <div>, <p>) із відповідною інформацією.
	•	Виведені дані повинні включати назву книги, автора, рік видання та жанр.
	4.	Додати функціонал для відображення списку книг на сторінці:
	•	Використовувати document.querySelector для вибору контейнера на сторінці.
	•	Додати згенеровані HTML-елементи до контейнера.


const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
{ title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];
*/
