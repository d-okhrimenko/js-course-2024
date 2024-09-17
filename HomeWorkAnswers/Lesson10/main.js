const books = {
    bookList: [
        { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" }
    ],

    lastId: 5,

    add(title, author, year, genre) {
        this.lastId++;
        let newBook = {
            id: this.lastId,
            title: title,
            author: author,
            year: year,
            genre: genre
        };
        this.bookList.push(newBook);
    },
    remove(id) {
        let index = this.bookList.findIndex(x => x.id == id);
        this.bookList.splice(index, 1);
    },
    update(id, title, author, year, genre) {
        let index = this.bookList.findIndex(x => x.id == id);
        let updatedBook = {
            id: id,
            title: title,
            author: author,
            year: year,
            genre: genre
        };
        this.bookList[index] = updatedBook;
    },
    find(id) {
        let index = this.bookList.findIndex(x => x.id == id);
        return this.bookList[index];
    },
    exist(title, id) {
        return this.bookList.some(x => x.title == title && x.id != id);
    }
};


const booksUI = {
    render(books, parentElement, template) {
        parentElement.innerHTML = Mustache.render(template, {books: books});
    }
}


let bookContainer = document.querySelector("#books");
let bookTemplate = document.querySelector("#template-book").innerHTML;
const bookForm = document.querySelector("#book-form");

// inputs
const nameInput = document.querySelector("#name-input");
const authorInput = document.querySelector("#author-input");
const yearInput = document.querySelector("#year-input");
const genreInput = document.querySelector("#genre-input");

yearInput.setAttribute("max", new Date().getFullYear());

let editId = null;

function render() {
    booksUI.render(books.bookList, bookContainer, bookTemplate);
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (editId == null) {
        books.add(nameInput.value, authorInput.value, yearInput.value, genreInput.value);
    } else {
        books.update(editId, nameInput.value, authorInput.value, yearInput.value, genreInput.value);
        editId = null;
    }

    nameInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    genreInput.value = "";
    
    render();
});

function remove(id) {
    books.remove(id);

    validateTitle();
    render();
}

function edit(id) {
    const editBook = books.find(id);

    editId = editBook.id;

    nameInput.value = editBook.title;
    authorInput.value = editBook.author;
    yearInput.value = editBook.year;
    genreInput.value = editBook.genre;

    validateTitle();
    render();
}

function validateTitle() {
    if (books.exist(nameInput.value, editId)) {
        nameInput.setCustomValidity("Книга вже є");
    }
    else {
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("input", validateTitle);


render();
