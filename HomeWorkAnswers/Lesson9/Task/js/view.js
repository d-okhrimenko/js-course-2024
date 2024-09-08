const bookList = {

    render(books, element, template) {
       let html = "";
        books.forEach(book => {
            let section = Mustache.render(template, book);
            html+=section;
        });

        element.innerHTML = html;
    },

    renderBook({ id, title, year, author, genre }) {
        return `
        <button onclick="edit(${id})">Редагувати</button>
        <button onclick="remove(${id})">Видалити</button>
        <h2>${title}</h2>
        <p>Рік: ${year}</p>
        <p>Автор: ${author}</p>
        <p>Жанр: ${genre}</p>
        `;
    }
}