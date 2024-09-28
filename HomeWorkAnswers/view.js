function displayBooks() {
    const bookList = document.querySelector("#bookList");
    bookList.innerText = ''; 

    booksArray.books.forEach((book) => {
        const bookContainer = document.createElement('section');
        bookContainer.classList.add('book-container');

        const title = document.createElement('p');
        const titleLabel = document.createElement('span');
        titleLabel.innerText = 'Title: ';
        titleLabel.style.fontWeight = 'bold';
        title.appendChild(titleLabel);
        title.appendChild(document.createTextNode(book.title));

        const author = document.createElement('p');
        const authorLabel = document.createElement('span');
        authorLabel.innerText = 'Author: ';
        authorLabel.style.fontWeight = 'bold';
        author.appendChild(authorLabel);
        author.appendChild(document.createTextNode(book.author));

        const year = document.createElement('p');
        const yearLabel = document.createElement('span');
        yearLabel.innerText = 'Year: ';
        yearLabel.style.fontWeight = 'bold';
        year.appendChild(yearLabel);
        year.appendChild(document.createTextNode(book.year));

        const genre = document.createElement('p');
        const genreLabel = document.createElement('span');
        genreLabel.innerText = 'Genre: ';
        genreLabel.style.fontWeight = 'bold';
        genre.appendChild(genreLabel);
        genre.appendChild(document.createTextNode(book.genre));

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('book-button');
        editButton.onclick = () => editBook(book.id);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.classList.add('book-button');
        deleteButton.onclick = () => deleteBook(book.id);

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(genre);
        bookContainer.appendChild(editButton);
        bookContainer.appendChild(deleteButton);
        
        bookList.appendChild(bookContainer);
    });
}

