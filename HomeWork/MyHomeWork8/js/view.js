const bookList = {
    render(books, element) {
        books.forEach(book => {
            let li = document.createElement('li');
            li.classList.add('book-block');
            li.insertAdjacentHTML('beforeend', `<h2>${book.title}</h2>`);
            li.insertAdjacentHTML('beforeend', `<h3>${book.author}</h3>`);
            li.insertAdjacentHTML('beforeend', `<p>${book.year}</p>`);
            li.insertAdjacentHTML('beforeend', `<p>${book.genre}</p>`);
            element.appendChild(li);
        });
    }
}