const bookCatalog = {
    renderTemplate(books, element, template) {
        let html = "";
        books.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    },

    renderTemplateWithElements(template, data, element) {
        Mustache.parse(template);
        let html = Mustache.render(template, data);
        element.innerHTML = html;
    },

    renderTemplateBySelectors(templateSelector, data, elementSelector) {
        let template = $(templateSelector).html();
        Mustache.parse(template);
        let html = Mustache.render(template, data);
        $(elementSelector).html(html);
    },
}
