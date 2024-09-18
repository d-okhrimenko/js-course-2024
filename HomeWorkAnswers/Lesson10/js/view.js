const renderBooks = {
    renderWithTemplate(books, element, template) {
        let html = "";
        books.forEach((book, index) => {
            html += Mustache.render(template, { book, index });
        });
        element.innerHTML = html;
    },
}