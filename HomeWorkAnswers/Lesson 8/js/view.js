let bookList = {
    // render(books, element) {
    //     books.forEach(book => {
    //         let div = document.createElement("div");
    //         div.classList.add("book");

    //         div.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
    //         div.insertAdjacentHTML("beforeend", `<p>author: ${book.author}</p>`);
    //         div.insertAdjacentHTML("beforeend", `<p>year: ${book.year}</p>`);
    //         div.insertAdjacentHTML("beforeend", `<p>genre: ${book.genre}</p>`);

    //         element.appendChild(div);
    //     });
    // },

    renderWithTemplate(books, element, template) {
        let content = "";
        books.forEach(book => {
            content += Mustache.render(template, book);
        });
        element.innerHTML = content;
    }
}
