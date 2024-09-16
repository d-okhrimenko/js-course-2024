let bookArray = [
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

function showBook(arr) {
  const booksList = document.querySelector("#books");
  booksList.innerHTML = "";

  arr.forEach((book, index) => {
    const booksContainer = document.createElement("div");
    booksContainer.classList.add("book");
    booksContainer.style.background = "burlywood";
    booksContainer.style.borderRadius = "20px";
    booksContainer.style.padding = "10px 20px";
    booksContainer.style.margin = "0 0 20px 0";

    const booksTitle = document.createElement("h2");
    booksTitle.textContent = `"${book.title}"`;
    booksContainer.appendChild(booksTitle);

    const booksAuthor = document.createElement("p");
    booksAuthor.textContent = `Автор: ${book.author}`;
    booksContainer.appendChild(booksAuthor);

    const booksYear = document.createElement("p");
    booksYear.textContent = `Рік видання: ${book.year}`;
    booksContainer.appendChild(booksYear);

    const booksGenre = document.createElement("p");
    booksGenre.textContent = `Жанр: ${book.genre}`;
    booksContainer.appendChild(booksGenre);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.onclick = function () {
      editBook(index);
    };
    editBtn.style.marginRight = "10px";
    booksContainer.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.onclick = function () {
      deleteBook(index);
    };
    booksContainer.appendChild(deleteBtn);

    booksList.appendChild(booksContainer);
  });
}

showBook(bookArray);

function addBook(title, author, year, genre) {
  bookArray.push({ title, author, year, genre });
  showBook(bookArray);
}

let editingIndex = -1;

function editBook(index) {
  const book = bookArray[index];
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("year").value = book.year;
  document.getElementById("genre").value = book.genre;
  editingIndex = index;

  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline";
}

function updateBook() {
  if (editingIndex !== -1) {
    bookArray[editingIndex] = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      year: parseInt(document.getElementById("year").value),
      genre: document.getElementById("genre").value,
    };
    editingIndex = -1;

    document.getElementById("addBtn").style.display = "inline";
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("bookForm").reset();
    showBook(bookArray);
  }
}

function deleteBook(index) {
  bookArray.splice(index, 1);
  showBook(bookArray);
}

function validateForm(title, author, year, genre) {
  let isValid = true;

  const currentYear = new Date().getFullYear();

  if (!title.trim()) {
    alert("Назва книги не може бути порожньою");
    isValid = false;
  } else if (
    bookArray.some(
      (book, index) => book.title === title && index !== editingIndex
    )
  ) {
    alert("Книга з такою назвою вже існує");
    isValid = false;
  }

  if (!author.trim()) {
    alert("Автор не може бути порожнім");
    isValid = false;
  }

  if (!year || isNaN(year)) {
    alert("Введіть коректний рік");
    isValid = false;
  } else if (year < 1450 || year > currentYear) {
    alert(`Рік має бути в діапазоні від 1450 до ${currentYear}`);
    isValid = false;
  }

  if (!genre.trim()) {
    alert("Жанр не може бути порожнім");
    isValid = false;
  }

  return isValid;
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;

    if (validateForm(title, author, year, genre)) {
      if (editingIndex === -1) {
        addBook(title, author, year, genre);
      } else {
        updateBook();
      }

      document.getElementById("bookForm").reset();
    }
  });

document.getElementById("updateBtn").addEventListener("click", updateBook);
