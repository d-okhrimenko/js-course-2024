const booksForm = document.querySelector("#booksForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null; // Глобальна змінна для зберігання id книги, яку редагуємо
let element = document.querySelector("#books");

async function render() {
  booksView.render(booksModel.books, element); // Використовуємо booksModel для отримання книжок
}

// Обробник події на сабміт форми
booksForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Створюємо об'єкт книги з введених даних
  let book = {
    id: editId, // Додаємо id книги
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId === null) {
    // Якщо не редагуємо, додаємо нову книгу
    booksModel.add(book);
  } else {
    // Якщо редагуємо, оновлюємо існуючу книгу
    booksModel.update(editId, book);
    editId = null; // Скидаємо id після редагування
  }

  render(); // Оновлюємо список книг на сторінці
  booksForm.reset(); // Очищуємо форму після сабміту
});

// Функція для видалення книги
function remove(id) {
  booksModel.remove(id); // Видаляємо книгу по id
  render(); // Оновлюємо відображення
}

// Функція для початку редагування книги
function edit(id) {
  const book = booksModel.find(id); // Знаходимо книгу по id

  // Заповнюємо форму значеннями книги
  editId = book.id; // Зберігаємо id книги, яку редагуємо
  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render(); // Оновлюємо відображення
}

// Ініціалізація даних та рендеринг
async function init() {
  await booksModel.fetchBooks(); // Завантажуємо книги з JSON-файлу
  render(); // Відображаємо їх на сторінці
}

// Виклик init після завантаження DOM
document.addEventListener('DOMContentLoaded', init);


