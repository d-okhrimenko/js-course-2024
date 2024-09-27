const Book = (title, author, year, genre) => {
  return {
    title,
    author,
    year,
    genre,
    displayInfo() {
      const bookProps = ['Назва', 'Автор', 'Рік', 'Жанр'];
      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');

      bookProps.forEach((label, index) => {
        const labelElement = document.createElement('span');
        labelElement.textContent = `${label}: `;
        labelElement.classList.add('label');

        const valueElement = document.createElement('span');
        valueElement.textContent = [this.title, this.author, this.year, this.genre][index];

        bookInfo.appendChild(labelElement);
        bookInfo.appendChild(valueElement);
        bookInfo.appendChild(document.createElement('br'));
      });

      return bookInfo;
    }
  };
};


const books = [
  Book("1984", "Джордж Орвелл", 1949, "Антиутопія"),
  Book("Гаррі Поттер і філософський камінь", "Дж. К. Роулінг", 1997, "Фентезі"),
  Book("Гра престолів", "Джордж Р. Р. Мартін", 1996, "Фентезі"),
  Book("Старий і море", "Ернест Хемінгуей", 1952, "Пригодницький роман"),
  Book("Майстер і Маргарита", "Михайло Булгаков", 1967, "Фантастика")
];

const booksList = document.querySelector('#books-list');
booksList.classList.add('books-list');

books.forEach(book => {
  const bookElement = document.createElement('li');
  const bookInfo = book.displayInfo();
  bookElement.appendChild(bookInfo);
  booksList.appendChild(bookElement);
});

