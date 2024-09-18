let library = {
    bookIsCounter:  5,
    books: [
        { id: 0, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 1, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 2, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 3, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 4, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    ],

    add(book) {
        book.id = this.bookIsCounter++;
        this.books.push(book);
    },

    remove(bookId) {
        let index = this.books.findIndex(x => x.id == bookId);
        this.books.splice(index, 1);
    },

    update(bookId, book) {
        let index = this.books.findIndex(x => x.id == bookId);
        this.books[index] = book;
    },

    find(bookId) {
        let index = this.books.findIndex(x => x.id == bookId);
        return this.books[index];
    },
}

let libraryUI = {
    showBookCard: function (book, element) {
        let section = document.createElement("section");
        section.classList.add("book");
        section.insertAdjacentHTML("beforeend", `<h3>${book.title}</h3>`);
        section.insertAdjacentHTML("beforeend", `<p>Автор: ${book.author}</p>`);
        section.insertAdjacentHTML("beforeend", `<p>Рік: ${book.year}</p>`);
        section.insertAdjacentHTML("beforeend", `<p>Жанр: ${book.genre}</p>`);
        section.insertAdjacentHTML("beforeend", `<button onclick="edit(${book.id})">Редагувати</button>`);
        section.insertAdjacentHTML("beforeend", `<button onclick="remove(${book.id})">Видалити</button>`);
        section.insertAdjacentHTML("beforeend", `<hr />`);
        element.appendChild(section);
        return section;
    },

    showBooks: function (books) {
        let booksContainer = document.querySelector("#t1-books");
        books.forEach(book => {
            this.showBookCard(book, booksContainer);
        });
    }

}

function render() {
    document.querySelector("#t1-books").innerHTML = '';
    libraryUI.showBooks(library.books);
}


const bookForm = document.forms[0];//document.querySelector("#bookForm");

const bookIdHidden = document.querySelector("#bookId");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const bookFormCreateBtn = document.querySelector("#bookForm-new");
const bookFormUpdateBtn = document.querySelector("#bookForm-upd");
const bookFormClearBtn = document.querySelector("#bookForm-del");

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    switch (e.submitter) {
        case bookFormCreateBtn:
            let book = {
                title: titleInput.value,
                author: authorInput.value,
                year: yearInput.value,
                genre: genreInput.value,
            };
        
            library.add(book);
        
            render();
            break;

        case bookFormUpdateBtn:
            let book2 = {
                title: titleInput.value,
                author: authorInput.value,
                year: yearInput.value,
                genre: genreInput.value,
            };
        
            library.update(bookIdHidden.value, book2);
            
            render();
            break;

        case bookFormClearBtn:
            bookIdHidden.value = "";
            titleInput.value = "";
            authorInput.value = "";
            yearInput.value = "";
            genreInput.value = "";
            bookFormUpdateBtn.setAttribute("disabled", "disabled");
            break;
    }ж

    
});

function remove(id) {
    library.remove(id);
    render();
}

function edit(id) {
    const book = library.find(id);

    bookIdHidden.value = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    bookFormUpdateBtn.removeAttribute("disabled");
}

render();