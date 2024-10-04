const bookList = {

    render(books, element) {
        let html = "";
        books.forEach(book => {
            let section = document.createElement("div");
            section.classList.add("book");
            section.insertAdjacentHTML("beforeend", this.renderBook(book));
            element.append(section);
        });
    },

    renderBook({ title, year, author, genre }) {
        return `
        <h2>${title}</h2>
        <p>Рік: ${year}</p>
        <p>Автор: ${author}</p>
        <p>Жанр: ${genre}</p>
        `;
    }
}