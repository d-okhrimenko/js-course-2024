const bookstListRender = {
   renderWithTemplate(books, element, template) {
        let html = "";
        books.forEach(bookRender => {
            html += Mustache.render(template, bookRender);
        });
        element.innerHTML = html;
    }
}