const BOOK_PROPS = ['Назва', 'Автор', 'Рік', 'Жанр'];
const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1450;

const bookModal = document.getElementById('book-modal');
const deleteConfirmModal = document.getElementById('delete-confirm-modal');
const addBookButton = document.querySelector('.add-book-button');
const closeButtons = document.querySelectorAll('.close-button');
const booksList = document.querySelector('#books-list');
const bookForm = document.getElementById('book-form');
const modalTitle = document.getElementById('modal-title');
const submitButton = document.getElementById('submit-button');
const errorMessageElement = document.getElementById('error-message');
const yearInput = document.getElementById('year');

yearInput.setAttribute('min', MIN_YEAR.toString());
yearInput.setAttribute('max', CURRENT_YEAR.toString());

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

    BOOK_PROPS.forEach((label, index) => {
      const labelElement = document.createElement('span');
      labelElement.textContent = `${label}: `;
      labelElement.classList.add('label');

      const valueElement = document.createElement('span');
      valueElement.textContent = [this.title, this.author, this.year, this.genre][index];

      bookInfo.appendChild(labelElement);
      bookInfo.appendChild(valueElement);
      bookInfo.appendChild(document.createElement('br'));
    });

    const buttonsContainer = createCardButtonsContainer(this);
    bookInfo.appendChild(buttonsContainer);

    return bookInfo;
  }
}

const fillPlaceholders = document.querySelectorAll('#book-form input');
fillPlaceholders.forEach((input, index) => {
  input.placeholder = BOOK_PROPS[index];
});

let books = [
  new Book("1984", "Джордж Орвелл", 1949, "Антиутопія"),
  new Book("Гаррі Поттер і філософський камінь", "Дж. К. Роулінг", 1997, "Фентезі"),
  new Book("Гра престолів", "Джордж Р. Р. Мартін", 1996, "Фентезі"),
  new Book("Старий і море", "Ернест Хемінгуей", 1952, "Пригодницький роман"),
  new Book("Майстер і Маргарита", "Михайло Булгаков", 1967, "Фантастика")
];

let editingBookId = null;

const openModal = (modal) => modal.style.display = 'block';
const closeModal = (modal) => modal.style.display = 'none';

function createCardButtonsContainer(book) {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('card-buttons-container');

  const editButton = createButton('Редагувати', 'edit-button', () => openBookModal(book, true));
  const deleteButton = createButton('Видалити', 'delete-button', () => confirmBookDeletion(book));

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  return buttonsContainer;
}

function createButton(text, className, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener('click', onClick);
  return button;
}

function confirmBookDeletion(book) {
  openModal(deleteConfirmModal);

  const confirmDeleteButton = deleteConfirmModal.querySelector('.confirm-deletion-button');
  const abortDeletionButton = deleteConfirmModal.querySelector('.abort-deletion-button');

  confirmDeleteButton.onclick = () => {
    removeBookById(book.id);
    displayBooksList();
    closeModal(deleteConfirmModal);
  };

  abortDeletionButton.onclick = () => closeModal(deleteConfirmModal);
}

function removeBookById(id) {
  books = books.filter(book => book.id !== id);
}

function displayBooksList() {
  booksList.innerHTML = '';
  books.forEach(book => {
    const bookElement = document.createElement('li');
    bookElement.appendChild(book.displayInfo());
    booksList.appendChild(bookElement);
  });
}

function openBookModal(book = null, isEditing = false) {
  clearErrorMessage();
  editingBookId = book ? book.id : null;
  modalTitle.textContent = isEditing ? 'Редагувати Книгу' : 'Додати Книгу';
  submitButton.textContent = isEditing ? 'Зберегти' : 'Додати';

  document.getElementById('title').value = book ? book.title : '';
  document.getElementById('author').value = book ? book.author : '';
  document.getElementById('year').value = book ? book.year : '';
  document.getElementById('genre').value = book ? book.genre : '';

  openModal(bookModal);
}

function displayErrorMessage(message) {
  errorMessageElement.textContent = message;
  errorMessageElement.style.display = 'block';
}

function clearErrorMessage() {
  errorMessageElement.textContent = '';
  errorMessageElement.style.display = 'none';
}

function validateForm(title, author, year, genre) {
  if (!title) {
    return { isValid: false, message: 'Назва книги не може бути порожньою' };
  } 

  if (books.some(book => book.title.toLowerCase() === title.toLowerCase() && book.id !== editingBookId)) {
    return { isValid: false, message: 'Книга з такою назвою вже існує' };
  }

  if (!author) {
    return { isValid: false, message: 'Ім\'я автора не може бути порожнім' };
  } 

  if (!year) {
    return { isValid: false, message: 'Рік видання не може бути порожнім' };
  }

  const yearNum = parseInt(year);
  if (isNaN(yearNum)) {
    return { isValid: false, message: 'Рік видання повинен бути числом' };
  }

  if (yearNum < MIN_YEAR || yearNum > CURRENT_YEAR) {
    return { isValid: false, message: `Рік видання повинен бути між ${MIN_YEAR} та ${CURRENT_YEAR}` };
  }
  
  if (!genre) {
    return { isValid: false, message: 'Жанр не може бути порожнім' };
  }

  return { isValid: true, message: '' };
}

addBookButton.addEventListener('click', () => openBookModal());

closeButtons.forEach(button => {
  button.addEventListener('click', () => closeModal(button.closest('.modal')));
});

bookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const year = document.getElementById('year').value.trim();
  const genre = document.getElementById('genre').value.trim();

  const validationResult = validateForm(title, author, year, genre);
  if (!validationResult.isValid) {
    displayErrorMessage(validationResult.message);
    return;
  }

  clearErrorMessage();

  if (editingBookId) {
    const book = books.find(book => book.id === editingBookId);
    if (book) {
      book.title = title;
      book.author = author;
      book.year = parseInt(year);
      book.genre = genre;
    }
  } else {
    const newBook = new Book(title, author, parseInt(year), genre);
    books.push(newBook);
  }

  displayBooksList();
  closeModal(bookModal);
});

displayBooksList();