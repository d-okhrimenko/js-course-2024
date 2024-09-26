const html = document.querySelector('#bookRecordsList');
const template = document.querySelector('#template').innerHTML;
const bookRecordForm = document.querySelector('#bookRecordForm');

// inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');
const bookRecordFormControl = document.querySelector('#formControl');

let editId = null;

let render = () => bookCatalog.renderMustache(bookList.bookRecords, html, template);

bookRecordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let record = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
    };

    if (editId == null) bookList.add(record);
    else {
        bookList.update(editId, record);
        editId = null;
        bookRecordFormControl.textContent = "Додати";    
    }

    render();
});

function edit(id) {
    const record = bookList.find(id);

    editId = record.id;
    bookRecordFormControl.textContent = "Оновити";
    titleInput.value = record.title;
    authorInput.value = record.author;
    yearInput.value = record.year;
    genreInput.value = record.genre;

    render();
}

function remove(id) {
    bookList.remove(id);
    render();
}

render();