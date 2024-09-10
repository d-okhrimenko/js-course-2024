"use strict";
import { control } from "./control.js";
const book = {
  books: [
    {
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
      id: 1,
    },
    {
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
      id: 2,
    },
    {
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
      id: 3,
    },
    {
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
      id: 4,
    },
    {
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
      id: 5,
    },
  ],

  currentEditId: null, // добавляем глобальную переменную для хранения ID редактируемой книги

  render() {
    const body = document.querySelector(".book-list__body"); // получаем блок с книгами
    body.innerHTML = ""; // очищаем блок
    this.books.forEach((item) => {
      const section = document.createElement("section"); // создал блок с книгой

      body.appendChild(section);
      section.classList.add("book-list__item");
      section.innerHTML = `
            <h2>Назва:  ${item.title}</h2>
            <p>Автор:  ${item.author}</p>
            <p>Рік видавництва: ${item.year}</p>
            <p>Жанр: ${item.genre}</p>
            <div class="book-list__button">
              <button type="button" class="book-list__btn edit" data-id="${item.id}">редагувати</button>
              <button type="button" class="book-list__btn dell" data-id="${item.id}">видалити ${item.id}</button>
             </div>
        `;
      console.log(item);
    });
  },

  // создаю объект книгу
  createBook() {
    const inputTitle = document.getElementById("title").value.trim();
    const inputAuthor = document.getElementById("author").value.trim();
    const inputYear = document.getElementById("year").value.trim();
    const inputGenre = document.getElementById("genre").value.trim();
    console.log(inputTitle, inputAuthor, inputYear, inputGenre);

    return {
      title: inputTitle,
      author: inputAuthor,
      year: inputYear,
      genre: inputGenre,
      id: this.books.length + 1, // динамическое создание ID
    };
  },

  // очищаю инпуты
  cleanInputBook() {
    const inputTitle = (document.getElementById("title").value = "");
    const inputAuthor = (document.getElementById("author").value = "");
    const inputYear = (document.getElementById("year").value = "");
    const inputGenre = (document.getElementById("genre").value = "");
  },

  // дадаю книгу до списку
  add() {
    const elem = this.createBook();
    this.books.push(elem);
    this.render(); //обновляю список после добавления
    this.cleanInputBook(); //еще нужно обновить инпуты после
  },

  //  ---------------------------------- код для удаления объекта ---------------------------------
  // удаляю по айди
  remove(id) {
    let index = this.books.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log("Видалив книгу " + index);
      this.render(); //обновляю список после удаления
    } else {
      //* to do добавить попап с предупреждением
      console.log("Такої книги не знайдено");
    }
  },
  // добавляем обработчик событий на родительский элемент для удаления объекта edit" data-id="${item.id}
  addEventListenersForRemowe() {
    document
      .querySelector(".book-list__body")
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("dell")) {
          const id = parseInt(event.target.getAttribute("data-id"));
          this.remove(id);
        }
      });
  },
  // ---------------------------------------------------------------------------------------------
  // ---------------------------- код для редактирования объекта ----------------------------------
  // добавляю обработчик события на родительский блок для поиска кнопки РЕДАГУВАТИ соответствующего объекта
  // edit" data-id="${item.id}
  addEventListenersForEdit() {
    document
      .querySelector(".book-list__body")
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("edit")) {
          const id = parseInt(event.target.getAttribute("data-id"));
          console.log("редактирую объект " + id);
          book.update(id);
        }
      });
  },

  // Функция для поиска книги по ID
  findBookById(id) {
    return this.books.find((book) => book.id === id);
  },

  // функция для редактирования обїекта
  update(id) {
    this.currentEditId = id; // сохраняем ID редактируемой книги
    control.openPopup();
    // Вызываем функцию для поиска книги
    const bookToEdit = this.findBookById(id);
    // Проверяем, что книга найдена
    if (bookToEdit) {
      // Заполняем поля в попапе значениями книги
      document.getElementById("title").value = bookToEdit.title;
      document.getElementById("author").value = bookToEdit.author;
      document.getElementById("year").value = bookToEdit.year;
      document.getElementById("genre").value = bookToEdit.genre;
    } else {
      console.log("Книга с таким ID не найдена.");
    }
  },

  saveEditedBook() {
    const id = this.currentEditId; // получаем текущий ID
    const updatedBook = this.findBookById(id);

    if (updatedBook) {
      updatedBook.title = document.getElementById("title").value;
      updatedBook.author = document.getElementById("author").value;
      updatedBook.year = document.getElementById("year").value;
      updatedBook.genre = document.getElementById("genre").value;

      console.log("Книга успешно обновлена:", updatedBook);
      this.render();
      this.cleanInputBook();
      this.currentEditId = null; // сбрасываем текущий ID после сохранения
    }
  },
};

export { book };
