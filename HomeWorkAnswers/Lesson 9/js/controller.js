let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");
const bookFindForm = document.querySelector("#bookFindForm");

// inputs
const firstNameInput = document.querySelector("#titleInput");
const yearInput = document.querySelector("#yearInput");
const phoneInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
	bookList.renderWithTemplate(listBook.books, html, template);
}

bookForm.addEventListener("submit", function (e) {
	e.preventDefault();

	let book = {
		title: titleInput.value,
		author: authorInput.value,
		year: yearInput.value,
		genre: genreInput.value,
	};

	if (editId == null) {
		listBook.add(book);
	} else {
		listBook.update(editId, book);
		editId = null;
	}

	render();
});

function remove(id) {
	listBook.remove(id);
	render();
}

function edit(id) {
	const book = listBook.find(id);

	editId = book.id;

	titleInput.value = book.title;
	authorInput.value = book.author;
	yearInput.value = book.year;
	genreInput.value = book.genre;

	render();
}

render();
