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
