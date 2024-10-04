const bookList = {

    render(books, element, template) {
       let html = "";
        books.forEach(book => {
            let section = Mustache.render(template, book);
            html+=section;
        });

        element.innerHTML = html;
    }
}