const View = {
    displayBooks(books) {
        const bookList = document.querySelector('#bookList');
        bookList.innerHTML = '';

        books.forEach(book => {
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

            bookItem.appendChild(title);
            bookItem.appendChild(author);
            bookItem.appendChild(year);
            bookItem.appendChild(genre);

            bookList.appendChild(bookItem);
        });
    }
};
