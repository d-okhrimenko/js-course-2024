const books = [
  { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
  { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
  { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
  { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
  { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

// Функція для відображення списку книг
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ""; // Очищення списку

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <p>Автор: ${book.author}</p>
      <p>Рік видання: ${book.year}</p>
      <p>Жанр: ${book.genre}</p>
      <button class="edit-button" data-index="${i}">Редагувати</button>
      <button class="delete-button" data-index="${i}">Видалити</button>
    `;
    bookList.appendChild(bookItem);
  }

  // Додавання обробників подій для кнопок "Редагувати" та "Видалити"
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach(button => {
    button.addEventListener("click", editBook);
  });

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(button => {
    button.addEventListener("click", deleteBook);
  });
}

// Функція для додавання нової книги
function addBook(title, author, year, genre) {
  const newBook = { title, author, year, genre };
  books.push(newBook);
  displayBooks();
}

// Функція для редагування книги
function editBook(event) {
  const index = event.target.dataset.index;
  const book = books[index];

  // Відображення форми для редагування
  const editForm = document.createElement("form");
  editForm.innerHTML = `
    <label for="title">Назва:</label>
    <input type="text" id="title" value="${book.title}"><br>
    <label for="author">Автор:</label>
    <input type="text" id="author" value="${book.author}"><br>
    <label for="year">Рік видання:</label>
    <input type="number" id="year" value="${book.year}"><br>
    <label for="genre">Жанр:</label>
    <input type="text" id="genre" value="${book.genre}"><br>
    <button type="submit">Зберегти</button>
  `;

  // Додавання обробника події для форми
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;
    books[index] = { title, author, year, genre };
    displayBooks();
    editForm.remove(); // Прибирання форми після збереження
  });

  // Вставлення форми на сторінку
  const bookItem = event.target.parentElement;
  bookItem.innerHTML = "";
  bookItem.appendChild(editForm);
}

// Функція для видалення книги
function deleteBook(event) {
  const index = event.target.dataset.index;
  books.splice(index, 1);
  displayBooks();
}

// Початкова ініціалізація
displayBooks();

// Додавання обробника події для форми додавання книги
const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const genre = document.getElementById("genre").value;
  addBook(title, author, year, genre);
  addBookForm.reset(); // Очищення форми після додавання
});