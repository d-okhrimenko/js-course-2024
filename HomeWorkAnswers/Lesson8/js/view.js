const bookList = {
    render(books, element) {
        books.forEach(book => {
            let tag = document.createElement("div");    // "section"
            tag.classList.add("book");
            tag.insertAdjacentHTML("beforeend", `<h2>Назва книги: ${book.title}</h2>`);
            tag.insertAdjacentHTML("beforeend", `<h3>Автор: ${book.author}</h3>`);
            tag.insertAdjacentHTML("beforeend", `<p>Рік видання: ${book.year}</p>`);
            tag.insertAdjacentHTML("beforeend", `<p>Жанр: ${book.genre}</p>`);
            element.appendChild(tag);
        });
    },

    renderWithTemplate(books, element, template) {
        let html = "";
        books.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }
}