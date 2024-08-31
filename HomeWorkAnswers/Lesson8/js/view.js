const renderBooks = {
    renderWithTemplate(dataBooks, element, template) {
        let html = "";
        dataBooks.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }
}