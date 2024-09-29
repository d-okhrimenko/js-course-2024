const html = document.querySelector('#bookRecordsList');
//const template = document.querySelector('#template').innerHTML;
const bookRecordForm = document.querySelector('#bookRecordForm');

// inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');
const bookRecordFormControl = document.querySelector('#formControl');

let editId = null;

let setEventListener = (selector,  type, func, attribute) => {
    let elementRecords = document.querySelectorAll(selector);
    elementRecords.forEach(function (record) {
        record.addEventListener(type, () => func(record.getAttribute(attribute)));
    });
}

/*let render = () => bookCatalog.renderTemplateNew(template, bookList, html);*/
let render = () => {
    bookCatalog.renderTemplateBySelectors("#template", bookList, "#bookRecordsList");
    setEventListener('#editRecord', 'click', edit, 'recordId');
    setEventListener('#deleteRecord', 'click', remove, 'recordId');
}

bookRecordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let record = {
        id: -1,
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
    inputsUpdate();

    render();
});

function inputsUpdate(record = null) {
    if (record == null) {
        titleInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
        genreInput.value = "";
    } else {
        titleInput.value = record.title;
        authorInput.value = record.author;
        yearInput.value = record.year;
        genreInput.value = record.genre;
    }
}

function edit(id) {
    const record = bookList.find(id);

    editId = record.id;
    bookRecordFormControl.textContent = "Оновити";
    inputsUpdate(record);
}

function remove(id) {
    if (editId != null) {
        editId = null;
        bookRecordFormControl.textContent = "Додати";
    }
    bookList.remove(id);
    inputsUpdate();
    render();
}

render();
