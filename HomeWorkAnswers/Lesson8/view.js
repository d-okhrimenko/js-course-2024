let bookList = {
   
    renderWithTemplate(books, element, template) {
        let content = "";
        books.forEach(book => {
            content += Mustache.render(template, book);
        });
        element.innerHTML = content;
    }
}
