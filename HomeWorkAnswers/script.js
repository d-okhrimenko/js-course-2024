let books = [
  { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Дж. К. Роулінг",
    year: 1997,
    genre: "Фентезі",
  },
  {
    title: "Гра престолів",
    author: "Джордж Р. Р. Мартін",
    year: 1996,
    genre: "Фентезі",
  },
  {
    title: "Старий і море",
    author: "Ернест Хемінгуей",
    year: 1952,
    genre: "Пригодницький роман",
  },
  {
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: 1967,
    genre: "Фантастика",
  },
];

// Функція для відображення книг на сторінці
function displayBooks(bookArray) {
  const bookList = document.querySelector("#bookList");
  bookList.innerHTML = "";

  bookArray.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Автор:</strong> ${book.author}</p>
            <p><strong>Рік видання:</strong> ${book.year}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
            <div class="book-buttons">
              <button onclick="editBook(${index})">Редагувати</button>
              <button onclick="deleteBook(${index})">Видалити</button>
            </div>
        `;

    bookList.appendChild(bookDiv);
  });
}

// Додавання нової книги
function addBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  const genre = document.querySelector("#genre").value;

  if (title && author && year && genre) {
    books.push({ title, author, year: Number(year), genre });
    displayBooks(books);
    clearForm();
  }
}

// Видалення книги
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

// Редагування книги
let currentEditIndex = null;

function editBook(index) {
  currentEditIndex = index;
  const book = books[index];

  document.querySelector("#title").value = book.title;
  document.querySelector("#author").value = book.author;
  document.querySelector("#year").value = book.year;
  document.querySelector("#genre").value = book.genre;

  document.querySelector("#addBookButton").style.display = "none";
  document.querySelector("#editBookButton").style.display = "inline";
}

function saveEditBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  const genre = document.querySelector("#genre").value;

  if (title && author && year && genre) {
    books[currentEditIndex] = { title, author, year: Number(year), genre };
    displayBooks(books);
    clearForm();
  }
}

// Очищення форми після додавання або редагування
function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#genre").value = "";
  document.querySelector("#addBookButton").style.display = "inline";
  document.querySelector("#editBookButton").style.display = "none";
}

// Додавання слухачів подій
document.querySelector("#addBookButton").addEventListener("click", addBook);
document
  .querySelector("#editBookButton")
  .addEventListener("click", saveEditBook);

// Відображення початкового списку книг
displayBooks(books);
