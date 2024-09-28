const ul = document.querySelector('#book-list');
const bookForm = document.querySelector('#bookForm');

const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');

let editId = null;


bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    }

    if (editId == null) {
        bookItems.add(book);
    }else{
        bookItems.update(editId, book);
        editId = null;
    }
    render();
});

render();


function render() {
    bookList.render(bookItems.books, ul);
}

function remove(id) {
    bookItems.remove(id);
    render();
}

function edit(id) {
    const bookEdit = bookItems.find(id);

    editId = bookEdit.id;

    titleInput.value = bookEdit.title;
    authorInput.value = bookEdit.author;
    yearInput.value = bookEdit.year;
    genreInput.value = bookEdit.genre;
    render();
}

