const bookList = document.querySelector('.book_list');

const html = document.querySelector('.book_list-template');
let template = document.querySelector('#template').innerHTML;

const bookForm = document.querySelector('#book-form'),
	bookTitleInput = document.querySelector('#titleInput'),
	bookAuthorInput = document.querySelector('#authorInput'),
	bookYearInput = document.querySelector('#yearInput'),
	bookGenreInput = document.querySelector('#genreInput');

let editedId = null;

function renderLibrary() {
	bookCard.renderWithTemplate(library.books, html, template);
}

bookForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let book = {
		id: Date.now(),
		title: bookTitleInput.value,
		author: bookAuthorInput.value,
		year: bookYearInput.value,
		genre: bookGenreInput.value,
	};
	if (editedId === null) {
		library.addBook(book);
	} else {
        library.updateBook(editedId, book);
        editedId = null;
    }
	console.log(library.books);
	renderLibrary();
});

function remove(id) {
	library.removeBook(id);
	renderLibrary();
}
function edit(id) {
	const editedBook = library.findBook(id);
	editedId = editedBook.id;
	(bookTitleInput.value = editedBook.title),
		(bookAuthorInput.value = editedBook.author),
		(bookYearInput.value = editedBook.year),
		(bookGenreInput.value = editedBook.genre),
		renderLibrary();
}

renderLibrary();
