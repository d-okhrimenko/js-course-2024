let inputContainer = document.querySelector(".input-container");
let addBookForm = document.querySelector("#addBookForm");
let btnList = document.querySelector("#btnList");
let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");
let btnEdit = document.querySelector("#btnEdit");
let div = document.querySelector("#result");

let listBooks = () => {
  const books = [
    {
      id: 1,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
    },
    {
      id: 2,
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
    },
    {
      id: 3,
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
    },
    {
      id: 4,
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
    },
    {
      id: 5,
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
    },
  ];

  let formAddEdit = function () {
    addBookForm.innerHTML = "";

    let id = document.createElement("input");
    id.setAttribute("type", "number");
    id.setAttribute("id", "id");
    id.setAttribute("placeholder", "Id");
    id.required = true;
    addBookForm.appendChild(id);

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("placeholder", "Назва книги");
    title.required = true;
    addBookForm.appendChild(title);

    let author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("id", "author");
    author.setAttribute("placeholder", "Автор");
    author.required = true;
    addBookForm.appendChild(author);

    let year = document.createElement("input");
    year.setAttribute("type", "number");
    year.setAttribute("id", "year");
    year.setAttribute("placeholder", "Рік видання");
    year.required = true;
    addBookForm.appendChild(year);

    let genre = document.createElement("input");
    genre.setAttribute("type", "text");
    genre.setAttribute("id", "genre");
    genre.setAttribute("placeholder", "Жанр");
    genre.required = true;
    addBookForm.appendChild(genre);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit");
    submitButton.type = "submit";
    submitButton.textContent = "Ok";
    addBookForm.appendChild(submitButton);

    return { id, title, author, year, genre, submitButton };
  };

  return {
    _display() {
      if (!div) {
        console.error("Елемент із id 'result' не знайдено.");
        return;
      }
      div.innerHTML = "";

      books.forEach((book) => {
        let p = document.createElement("p");
        p.textContent = `${book.id}: ${book.title} - ${book.author}, ${book.year}, ${book.genre}`;

        div.appendChild(p);
      });
    },

    _addNewBook() {
      const { id, title, author, year, genre } = formAddEdit();

      const handleSubmit = (e) => {
        e.preventDefault();

        const idValue = parseInt(id.value.trim(), 10);
        const titleValue = title.value.trim();
        const authorValue = author.value.trim();
        const yearValue = parseInt(year.value.trim(), 10);
        const genreValue = genre.value.trim();

        // Валидация
        let errors = [];

        // Проверка названия книги
        if (!titleValue) {
          errors.push("Назва книги не може бути порожньою");
        }
        if (
          books.some(
            (book) => book.title.toLowerCase() === titleValue.toLowerCase()
          )
        ) {
          errors.push("Книга з такою назвою вже існує");
        }

        // Проверка автора
        if (!authorValue) {
          errors.push("Ім'я автора не може бути порожнім");
        }

        // Проверка года
        if (isNaN(yearValue)) {
          errors.push("Рік повинен бути числом");
        } else {
          const currentYear = new Date().getFullYear();
          if (yearValue < 1450 || yearValue > currentYear) {
            errors.push(`Рік повинен бути між 1450 та ${currentYear}`);
          }
        }

        // Проверка жанра
        if (!genreValue) {
          errors.push("Жанр не може бути порожнім");
        }

        if (errors.length > 0) {
          console.error(errors.join("\n"));
          return;
        }

        // Если валидация прошла успешно, добавляем книгу
        const newBook = {
          id: idValue,
          title: titleValue,
          author: authorValue,
          year: yearValue,
          genre: genreValue,
        };

        books.push(newBook);
        this._display();
        addBookForm.innerHTML = "";
      };
      addBookForm.removeEventListener("submit", handleSubmit);
      addBookForm.addEventListener("submit", handleSubmit);
    },

    _deleteBook() {
      addBookForm.innerHTML = "";

      let idInput = document.createElement("input");
      idInput.setAttribute("type", "number");
      idInput.setAttribute("id", "id");
      idInput.setAttribute("placeholder", "Id");
      idInput.required = true;
      addBookForm.appendChild(idInput);

      let submitButton2 = document.createElement("button");
      submitButton2.setAttribute("id", "submit");
      submitButton2.type = "submit";
      submitButton2.textContent = "Видалити";
      addBookForm.appendChild(submitButton2);

      const handleSubmit = (e) => {
        e.preventDefault();
        let id = parseInt(idInput.value.trim(), 10);
        let index = books.findIndex((x) => x.id === id);
        if (index !== -1) {
          books.splice(index, 1);
          this._display();
        }
        idInput.value = "";
      };
      addBookForm.removeEventListener("submit", handleSubmit);
      addBookForm.addEventListener("submit", handleSubmit);
    },

    _editBook() {
      addBookForm.innerHTML = "";

      let idInput = document.createElement("input");
      idInput.setAttribute("type", "number");
      idInput.setAttribute("id", "id");
      idInput.setAttribute("placeholder", "Id");
      idInput.required = true;
      addBookForm.appendChild(idInput);

      let searchButton = document.createElement("button");
      searchButton.setAttribute("id", "submit");
      searchButton.type = "button";
      searchButton.textContent = "Знайти книгу";
      addBookForm.appendChild(searchButton);

      searchButton.addEventListener("click", () => {
        let id = parseInt(idInput.value.trim(), 10);
        let book = books.find((x) => x.id === id);
        if (book) {
          addBookForm.innerHTML = "";
          let {
            id: id,
            title,
            author,
            year,
            genre,
            submitButton,
          } = formAddEdit();

          id.value = book.id;
          title.value = book.title;
          author.value = book.author;
          year.value = book.year;
          genre.value = book.genre;

          submitButton.textContent = "Оновити книгу";

          addBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            book.title = title.value.trim();
            book.author = author.value.trim();
            book.year = parseInt(year.value.trim(), 10);
            book.genre = genre.value.trim();

            this._display();
            addBookForm.innerHTML = "";
          });
        }
      });
    },
  };
};

const bookList = listBooks();
btnList.addEventListener("click", () => bookList._display());
btnAdd.addEventListener("click", () => bookList._addNewBook());
btnRemove.addEventListener("click", () => bookList._deleteBook());
btnEdit.addEventListener("click", () => bookList._editBook());
