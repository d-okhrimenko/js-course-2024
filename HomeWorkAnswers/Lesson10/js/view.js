export const bookList = {
    render(data, element, template) {
        let html = Mustache.render(template, data);
        element.innerHTML = html;
    }
}

export const bookForm = {
    render(element, template) {
        let html = Mustache.render(template, element);
        element.innerHTML = html;
    }
}
