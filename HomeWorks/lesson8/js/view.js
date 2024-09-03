const View = {
    displayBooks(books) {
        const bookList = document.querySelector('#bookList');
        bookList.innerHTML = '';

        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book';

            bookItem.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p><strong>Рік видання:</strong> ${book.year}</p>
                <p><strong>Жанр:</strong> ${book.genre}</p>
            `;

            bookList.appendChild(bookItem);
        });
    }
};
