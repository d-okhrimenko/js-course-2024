const marking = {
    render(books, element) {
     
        books.forEach(book => {
            let section = document.createElement("section");
            section.classList.add("item");
            section.insertAdjacentHTML("beforeend", `<h1>${book.title}</h1>`);
            section.insertAdjacentHTML("beforeend", `<h4>${book.author}</h4>`);
            section.insertAdjacentHTML("beforeend", `<p>${book.year}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);
            element.appendChild(section);
        });
    },



    renderWithTemplate(books, element, template) {
        let html = '';
        books.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }

}
