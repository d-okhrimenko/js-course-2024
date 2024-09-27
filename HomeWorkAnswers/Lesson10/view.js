const bookList = {
    // render(books, element) {
        
    //     books.forEach(book => {                   
    //     let section = document.createElement("section");
    //     section.classList.add("book");
    //     section.insertAdjacentHTML("beforeend", `<p>title: ${book.title}</p>`);
    //     section.insertAdjacentHTML("beforeend", `<p>author: ${book.author}</p>`);
    //     section.insertAdjacentHTML("beforeend", `<p>year: ${book.year}</p>`);
    //     section.insertAdjacentHTML("beforeend", `<p>genre: ${book.genre}</p>`);
    //     element.appendChild(section);
    //     });
    // },

    renderWithTemplate(books, element, template) {
        let html = "";
        books.forEach(book => {                   
        html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }

} 