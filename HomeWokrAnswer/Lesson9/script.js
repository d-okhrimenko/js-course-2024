let books = [];
let editIndex = -1;

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} - ${book.author} (${book.year}) - ${book.genre}`;
        li.appendChild(createEditButton(index));
        li.appendChild(createDeleteButton(index));
        bookList.appendChild(li);
    });
}

function createEditButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Редагувати';
    button.onclick = () => editBook(index);
    return button;
}

function createDeleteButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Видалити';
    button.onclick = () => deleteBook(index);
    return button;
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    if (title && author && year && genre) {
        books.push({ title, author, year, genre });
        clearInputFields();
        renderBooks();
    } else {
        alert('Будь ласка, заповніть всі поля');
    }
}

function editBook(index) {
    editIndex = index;
    const book = books[index];

    document.getElementById('editTitle').value = book.title;
    document.getElementById('editAuthor').value = book.author;
    document.getElementById('editYear').value = book.year;
    document.getElementById('editGenre').value = book.genre;
    document.getElementById('editForm').style.display = 'block';
}

function saveBook() {
    const title = document.getElementById('editTitle').value;
    const author = document.getElementById('editAuthor').value;
    const year = document.getElementById('editYear').value;
    const genre = document.getElementById('editGenre').value;

    if (editIndex >= 0 && title && author && year && genre) {
        books[editIndex] = { title, author, year, genre };
        document.getElementById('editForm').style.display = 'none';
        renderBooks();
        editIndex = -1;
    } else {
        alert('Будь ласка, заповніть всі поля');
    }
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
}