let library = {
    books: [
        { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    ],
}

let libraryUI = {
    showBookCard: function(book, element) {
        let section = document.createElement("section");
            section.classList.add("book");
            section.insertAdjacentHTML("beforeend", `<h3>${book.title}</h3>`);
            section.insertAdjacentHTML("beforeend", `<p>Автор: ${book.author}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Рік: ${book.year}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Жанр: ${book.genre}</p>`);
            section.insertAdjacentHTML("beforeend", `<hr />`);
            element.appendChild(section);
        return section;
    },

    showBooks: function(books) {
        let booksContainer = document.querySelector("#t1-books");
        books.forEach(book => {
            this.showBookCard(book, booksContainer);
        });
    }

}

libraryUI.showBooks(library.books);