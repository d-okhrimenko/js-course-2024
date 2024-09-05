const books = [
  { title: '1984', author: 'Джордж Орвелл', year: 1949, genre: 'Антиутопія' },
  { title: 'Гаррі Поттер і філософський камінь', author: 'Дж. К. Роулінг', year: 1997, genre: 'Фентезі' },
  { title: 'Гра престолів', author: 'Джордж Р. Р. Мартін', year: 1996, genre: 'Фентезі' },
  { title: 'Старий і море', author: 'Ернест Хемінгуей', year: 1952, genre: 'Пригодницький роман' },
  { title: 'Майстер і Маргарита', author: 'Михайло Булгаков', year: 1967, genre: 'Фантастика' },
];

const displayBooks = (books) => {
  const bookList = document.querySelector('#bookList');

  const createBookMarkup = ({ title, author, year, genre }) => `
      <h3>${title}</h3>
      <p>Автор: ${author}</p>
      <p>Рік видання: ${year}</p>
      <p>Жанр: ${genre}</p>
    `;

  books.forEach((book) => {
    const markup = createBookMarkup(book);
    const bookItem = document.createElement('div');

    bookItem.classList.add('bookItem');
    bookItem.insertAdjacentHTML('beforeend', markup);

    bookList.appendChild(bookItem);
  });
};

displayBooks(books);
