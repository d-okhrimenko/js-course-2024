const bookList = {
    render(books, element) {
        element.innerHTML = '';

        books.forEach(book => {
            const li = document.createElement('li');

            li.classList.add('book-block');  
            li.insertAdjacentHTML('beforeend', `<h2>${book.title}</h2>`);
            li.insertAdjacentHTML('beforeend', `<h3>${book.author}</h3>`);
            li.insertAdjacentHTML('beforeend', `<p>${book.year}</p>`);
            li.insertAdjacentHTML('beforeend', `<p>${book.genre}</p>`);
            li.insertAdjacentHTML('beforeend', `<button class='btn' onclick='edit(${book.id})'>Редагувати</button>`);
            li.insertAdjacentHTML('beforeend', `<button class='btn' onclick='remove(${book.id})'>Видалити</button>`);
            element.appendChild(li);
        });
    },
}