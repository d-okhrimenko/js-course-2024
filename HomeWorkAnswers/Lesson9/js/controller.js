const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;

const render = () => bookList.render(library.books, html, template);
render();

//Form
const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close");
const bookForm = document.querySelector("#bookForm");

//inputs
const title = document.querySelector("#titleInput");
const author = document.querySelector("#authorInput");
const year = document.querySelector("#yearInput");
const genre = document.querySelector("#genreInput");

openFormBtn.addEventListener("click", () => { popupForm.style.display = "block"; });
closeBtn.addEventListener("click", () => { popupForm.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === popupForm) popupForm.style.display = "none"; });
bookForm.dataset.id = "";

const openForm = () => popupForm.style.display = "block";

bookForm.addEventListener("submit", (p) => {
    p.preventDefault();

    let book = {
        title: title.value,
        author: author.value,
        year: year.value,
        genre: genre.value
    }

    const id = bookForm.dataset.id;

    if (id) {
        book.id = Number(id);
        library.modify(Number(id), book);
    } else {
        library.add(book);
    }

    bookForm.reset();
    bookForm.dataset.id = "";
    render();
});

const edit = (id) => {
    const book = library.find(id);

    bookForm.dataset.id = id;

    title.value = book.title;
    author.value = book.author;
    year.value = book.year;
    genre.value = book.genre;
}

const remove = (id) => {
    library.delete(id);
    render();
}
