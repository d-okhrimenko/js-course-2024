const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        genre: "self-help book"
    },
    {
        title: "Why We Eat? (Too Much)",
        author: "Dr. Andrew Jenkinson",
        year: 2020,
        genre: "health and nutrition"
    },
    {
        title: "Atlas Shrugged",
        author: "Ayn Rand",
        year: 1957,
        genre: "dystopian novel"
    },
    {
        title: "Women Who Run With the Wolves",
        author: "Clarissa Pinkola Estés",
        year: 1989,
        genre: "psychology, mythology, traditions, and references to the unconscious"
    },
    {
        title: "List of ships",
        author: "Serhiy Zhadan",
        year: 2020,
        genre: "poems"
    },
    {
        title: "Mesopotamia",
        author: "Serhiy Zhadan",
        year: 2014,
        genre: "fiction"
    },
    {
        title: "The 7 Habits Of Highly Effective People",
        author: "Stephen Richards Covey",
        year: 1989,
        genre: "self-help book"
    },
    {
        title: "Scrum: How to Do Twice as Much in Half the Time",
        author: "Jeff Sutherland",
        year: 2014,
        genre: "business and management"
    },
    {
        title: "Feel the Fear and Do It Anyway",
        author: "Susan Jeffers",
        year: 1987,
        genre: "self-help book"
    },
    {
        title: "Mine! How the Hidden Rules of Ownership Control Our Lives",
        author: "Michael Heller & James Salzman",
        year: 2021,
        genre: "non-fiction"
    }
];

const bookList = document.querySelector(".bookList");
const template = document.querySelector("#template").innerHTML;
const showBtn = document.querySelector(".toggleBtn");
const addBtn = document.querySelector(".addBtn")
const bookForm = document.querySelector("#bookForm");
const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");
let editID = null;

//An alternative implementation option

// function renderBooks(array) {

//     array.forEach(element => {

//         const bookItem = document.createElement("div");
//         bookItem.classList.add("book");

//         const author = document.createElement("p");
//         author.classList.add("author");
//         author.innerText = element.author;

//         const title = document.createElement("h2");
//         title.classList.add("title");
//         title.innerText = element.title;

//         const description = document.createElement("div");
//         description.classList.add("desc");

//         const year = document.createElement("p");
//         year.classList.add("year");
//         year.innerHTML = `year: ${element.year}`;

//         const genre = document.createElement("p");
//         genre.classList.add("genre");
//         genre.innerText = `genre: ${element.genre}`;

//         description.append(year);
//         description.append(genre);

//         bookItem.append(author);
//         bookItem.append(title);
//         bookItem.append(description);

//         bookList.append(bookItem);
//     });

// }


for (let i = 0; i < books.length; i++) {
    books[i].id = i + 1;
}


function renderBooksWithTemplate(array, template) {
    let html = "";
    array.forEach(element => {
        html += Mustache.render(template, element);
    });
    bookList.innerHTML = html;
}

function renderBookList(array) {

    const bookItemList = document.createElement("ul");
    bookList.append(bookItemList);
    bookList.classList.remove("grid")

    array.forEach(element => {
        const bookItem = document.createElement("li");
        bookItem.innerText = `${element.title} by ${element.author} (${element.year}, genre: ${element.genre})`;
        bookItemList.append(bookItem);
    })
}

function clear() {
    bookList.innerHTML = "";
}

showBtn.addEventListener("click", () => {
    clear();
    if (bookList.classList.contains("grid")) {
        showBtn.innerText = "Show books";
        bookList.classList.remove("grid");
        renderBookList(books);
    } else {
        showBtn.innerText = "Show list";
        bookList.classList.add("grid");
        renderBooksWithTemplate(books, template);
    }

})

addBtn.addEventListener("click", () => {
    bookForm.style.display = "block"
})



let lastID = books.length;

function addBook(book) {
    lastID++;
    book.id = lastID;
    books.push(book)
};

function removeBook(id) {
    let index = books.findIndex(book => book.id == id);
    books.splice(index, 1);
    renderBooksWithTemplate(books, template);
};

function updateBook(id, updatedBook) {
    let index = books.findIndex(book => book.id == id);
    let book = findBook(id);

    if (!updatedBook) {
        updatedBook = book;
    }

    editID = id;

    bookForm.style.display = "block";

    authorInput.value = book.author;
    titleInput.value = book.title;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    books[index] = updatedBook;
};

function findBook(id) {
    let index = books.findIndex(book => book.id == id);
    return books[index];
}


bookForm.addEventListener("submit", e => {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
        id: editID,
    }

    if (editID == null) {
        addBook(book);
    } else {
        updateBook(editID, book);
        editID = null;
    }

    renderBooksWithTemplate(books, template);

    authorInput.value = "";
    titleInput.value = "";
    yearInput.value = "";
    genreInput.value = "";

    bookForm.style.display = "none";
})

renderBooksWithTemplate(books, template);