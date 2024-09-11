const booksList = {
    renderWithTemplate(books, element, template) {
        let htmlBody = '';
        books.forEach(book => {
            htmlBody += Mustache.render(template, book);
        });

        element.innerHTML = htmlBody;
    }
}