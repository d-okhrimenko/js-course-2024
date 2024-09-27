const View = {
    displayBooks(books) {
        const bookList = document.querySelector('#bookList');
        bookList.innerHTML = '';

        books.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book';

            const title = document.createElement('h2');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = `Автор: ${book.author}`;

            const year = document.createElement('p');
            year.textContent = `Рік видання: ${book.year}`;

            const genre = document.createElement('p');
            genre.textContent = `Жанр: ${book.genre}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Редагувати';
            editButton.addEventListener('click', () => {
                Controller.populateForm(index);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', () => {
                Controller.deleteBook(index);
            });

            bookItem.appendChild(title);
            bookItem.appendChild(author);
            bookItem.appendChild(year);
            bookItem.appendChild(genre);
            bookItem.appendChild(editButton);
            bookItem.appendChild(deleteButton);

            bookList.appendChild(bookItem);
        });
    },

    clearForm() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#genre').value = '';
        document.querySelector('#editIndex').value = -1;
        document.querySelector('#submitButton').textContent = 'Додати книгу';
    },

    populateForm(book, index) {
        document.querySelector('#title').value = book.title;
        document.querySelector('#author').value = book.author;
        document.querySelector('#year').value = book.year;
        document.querySelector('#genre').value = book.genre;
        document.querySelector('#editIndex').value = index;
        document.querySelector('#submitButton').textContent = 'Оновити книгу';
    }
};
