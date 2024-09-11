const bookList = {
    
    renderWithTemplate(books, element, template) {
        let html = "";
        books.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }
}