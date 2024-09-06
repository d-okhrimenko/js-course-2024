const bookProps = ['Назва', 'Автор', 'Рік', 'Жанр'];

const fillPlaceholders = document.querySelectorAll('#add-book-form input');
fillPlaceholders.forEach((input, index) => {
  input.placeholder = bookProps[index];
});

class Book {
  static autoID = 1;

  constructor(title, author, year, genre) {
    this.id = Book.autoID++;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  displayInfo() {
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');

    bookProps.forEach((label, index) => {
      const labelElement = bookInfo.appendChild(document.createElement('span'));
      labelElement.textContent = `${label}: `;
      labelElement.classList.add('label');

      const valueElement = bookInfo.appendChild(document.createElement('span'));
      valueElement.textContent = [this.title, this.author, this.year, this.genre][index];

      bookInfo.appendChild(document.createElement('br'));
    });

    const buttonsContainer = createCardButtonsContainer(this, openEditModal, (book) => {
      openModal(deleteConfirmModal);

      const confirmDeleteButton = deleteConfirmModal.querySelector('.confirm-deletion-button');
      const abortDeletionButton = deleteConfirmModal.querySelector('.abort-deletion-button');

      confirmDeleteButton.onclick = () => {
        removeBookById(book.id);
        displayBooksList();
        closeModal(deleteConfirmModal);
      };

      abortDeletionButton.onclick = () => {
        closeModal(deleteConfirmModal);
      };
    });

    bookInfo.appendChild(buttonsContainer);

    return bookInfo;
  }
}

function createCardButtonsContainer(book, onEdit, onDelete) {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('card-buttons-container');

  const editButton = document.createElement('button');
  editButton.textContent = 'Редагувати';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', () => onEdit(book));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Видалити';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => onDelete(book));

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  return buttonsContainer;
}

let books = [
  new Book("1984", "Джордж Орвелл", 1949, "Антиутопія"),
  new Book("Гаррі Поттер і філософський камінь", "Дж. К. Роулінг", 1997, "Фентезі"),
  new Book("Гра престолів", "Джордж Р. Р. Мартін", 1996, "Фентезі"),
  new Book("Старий і море", "Ернест Хемінгуей", 1952, "Пригодницький роман"),
  new Book("Майстер і Маргарита", "Михайло Булгаков", 1967, "Фантастика")
];

const addBookModal = document.getElementById('add-book-modal');
const editBookModal = document.getElementById('edit-book-modal');
const deleteConfirmModal = document.getElementById('delete-confirm-modal');
const addBookButton = document.querySelector('.add-book-button');
const closeButtons = document.querySelectorAll('.close-button');
const booksList = document.querySelector('#books-list');
const addBookForm = document.getElementById('add-book-form');
const editBookForm = document.getElementById('edit-book-form');

const openModal = (modal) => modal.style.display = 'block';
const closeModal = (modal) => modal.style.display = 'none';

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeModal(button.closest('.modal'));
  });
});

addBookButton.addEventListener('click', () => {
  openModal(addBookModal);
});

addBookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('year').value,
    document.getElementById('genre').value
  );
  books.push(newBook);
  displayBooksList();
  closeModal(addBookModal);
});

let editingBookId = null;

editBookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const book = books.find(book => book.id === editingBookId);
  if (book) {
    book.title = document.getElementById('edit-title').value;
    book.author = document.getElementById('edit-author').value;
    book.year = document.getElementById('edit-year').value;
    book.genre = document.getElementById('edit-genre').value;
    displayBooksList();
    closeModal(editBookModal);
  }
});

function openEditModal(book) {
  editingBookId = book.id;
  document.getElementById('edit-title').value = book.title;
  document.getElementById('edit-author').value = book.author;
  document.getElementById('edit-year').value = book.year;
  document.getElementById('edit-genre').value = book.genre;
  openModal(editBookModal);
}

function removeBookById(id) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    return books.splice(index, 1)[0];
  }
  return null;
}

function displayBooksList() {
  booksList.innerHTML = '';
  books.forEach(book => {
    const bookElement = document.createElement('li');
    const bookInfo = book.displayInfo();
    bookElement.appendChild(bookInfo);
    booksList.appendChild(bookElement);
  });
}

displayBooksList();
