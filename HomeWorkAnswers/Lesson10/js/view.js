const contactList = {
    // render(contacts, element) {
    //     contacts.forEach(book => {
    //         let section = document.createElement("section");
    //         section.classList.add("book");
    //         section.insertAdjacentHTML("beforeend", `<h2>${book.firstName} ${book.lastName}</h2>`);
    //         section.insertAdjacentHTML("beforeend", `<p>Phone: ${book.phone}</p>`);
    //         section.insertAdjacentHTML("beforeend", `<p>Email: ${book.email}</p>`);
    //         section.insertAdjacentHTML("beforeend", `<p>${book.description}</p>`);
    //         element.appendChild(section);
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