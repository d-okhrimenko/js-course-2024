const Controller = {
    init() {
        View.displayBooks(Model.getBooks());

        document.querySelector('#bookForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.querySelector('#title').value;
            const author = document.querySelector('#author').value;
            const year = document.querySelector('#year').value;
            const genre = document.querySelector('#genre').value;

            const book = { title, author, year, genre };
            const editIndex = document.querySelector('#editIndex').value;

            if (editIndex === '-1') {
                this.addBook(book);
            } else {
                this.editBook(editIndex, book);
            }

            View.clearForm();
        });
    },

    addBook(book) {
        Model.addBook(book);
        View.displayBooks(Model.getBooks());
    },

    editBook(index, updatedBook) {
        Model.editBook(index, updatedBook);
        View.displayBooks(Model.getBooks());
    },

    deleteBook(index) {
        Model.deleteBook(index);
        View.displayBooks(Model.getBooks());
    },

    populateForm(index) {
        const book = Model.getBooks()[index];
        View.populateForm(book, index);
    }
};

document.addEventListener('DOMContentLoaded', () => Controller.init());

const currentYear = new Date().getFullYear();

Controller.validateForm = function(book, index = null) {
    const errors = [];

    if (!book.title || book.title.trim() === '') {
        errors.push("Назва книги не може бути порожньою.");
    } else if (Model.books.some((b, i) => b.title.toLowerCase() === book.title.toLowerCase() && i !== index)) {
        errors.push("Книга з такою назвою вже існує.");
    }

    if (!book.author || book.author.trim() === '') {
        errors.push("Ім'я автора не може бути порожнім.");
    }

    if (!book.year || isNaN(book.year)) {
        errors.push("Рік видання має бути числом.");
    } else if (book.year < 1450 || book.year > currentYear) {
        errors.push(`Рік видання має бути між 1450 та ${currentYear}.`);
    }

    if (!book.genre || book.genre.trim() === '') {
        errors.push("Жанр не може бути порожнім.");
    }

    return errors;
};

Controller.addOrEditBook = function(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const year = parseInt(document.querySelector('#year').value.trim(), 10);
    const genre = document.querySelector('#genre').value.trim();

    const book = { title, author, year, genre };

    const validationErrors = Controller.validateForm(book, Controller.currentEditIndex);

    if (validationErrors.length > 0) {
        alert(validationErrors.join("\n"));
        return;
    }

    if (Controller.currentEditIndex !== null) {
        Model.books[Controller.currentEditIndex] = book;
        Controller.currentEditIndex = null;
    } else {
        Model.books.push(book);
    }

    View.displayBooks(Model.books);
    event.target.reset();
};

Controller.startEditBook = function(index) {
    const book = Model.books[index];
    document.querySelector('#title').value = book.title;
    document.querySelector('#author').value = book.author;
    document.querySelector('#year').value = book.year;
    document.querySelector('#genre').value = book.genre;
    Controller.currentEditIndex = index;
};

Controller.clearFormForNewBook = function() {
    Controller.currentEditIndex = null;
    document.querySelector('#bookForm').reset();
};

document.querySelector('#bookForm').addEventListener('submit', Controller.addOrEditBook);
