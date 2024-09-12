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
const btn = document.querySelector(".toggleBtn");

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

btn.addEventListener("click", () => {
    clear();
    if (bookList.classList.contains("grid")) {
        btn.innerText = "Show books";
        bookList.classList.remove("grid");
        renderBookList(books);
    } else {
        btn.innerText = "Show list";
        bookList.classList.add("grid");
        renderBooksWithTemplate(books, template);
    }

})

renderBooksWithTemplate(books, template);