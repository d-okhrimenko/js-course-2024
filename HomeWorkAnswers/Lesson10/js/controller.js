const element = document.querySelector("#books-catalogue");
const bookForm = document.querySelector("#bookForm");
const btnSubmit = document.querySelector(".btn-submit");

const formBookTitle = document.querySelector(".form-book-title");
const formBookAuthor = document.querySelector(".form-book-author");
const formBookYear = document.querySelector(".form-book-year");
const formBookGenre = document.querySelector(".form-book-genre");
const formBookCover = document.querySelector(".form-book-cover");

function render() {
    booksСatalogue.render(booksList.books, element);
}

let editId = null;

btnSubmit.addEventListener("click", () => {
    // створення нової події input програмно
    const inputEventOther = new Event("input");

    // примусовий виклик події input у полі назви книги
    formBookTitle.dispatchEvent(inputEventOther);    
});

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    btnSubmit.textContent = "Додати книгу";

    let book = {
        id: editId,
        title: formBookTitle.value.trim(),
        author: formBookAuthor.value.trim(),
        year: formBookYear.value,
        genre: formBookGenre.value.trim(),
        cover: formBookCover.value
    };

    if (editId === null) {
        booksList.add(book);
    } else {
        booksList.update(editId, book);
        editId = null; 
    }

    booksList.modeEdit = false;

    cleaner();
    render(); 
    console.log("зміни збережено");
});

function editBook(id) {
    cleaner();
    
    const book = booksList.find(id);
    btnSubmit.textContent = "Зберегти зміни";   
    
    booksList.modeEdit = true;
    
    editId = book.id;
    formBookTitle.value = book.title;
    formBookAuthor.value = book.author;
    formBookYear.value = book.year;
    formBookGenre.value = book.genre;
    formBookCover.value = book.cover;
    
    render();  
    addStylesActiveBtnEdit(id);
}

function removeBook(id) {
    booksList.remove(id);
    cleaner();
    render();
    console.log("книгу видалено");  
}

// стилізація активної кнопки видалення
function addStylesActiveBtnEdit(idBook) {
    const btnEditCurrent = document.querySelector(`.btn-${idBook}-edit`);
    btnEditCurrent.classList.add("btn-active");
    btnEditCurrent.textContent = "Редагування...";   
}

// очищення форми
function cleanUpForm() {
    bookForm.reset();
}

// видалення стилів для підсвітки контурів полів форми при валідації
function cleanAllCssValidateClasses() {
    let validElements = document.querySelectorAll(".valid, .invalid");
    validElements.forEach(element => {
        if (element.classList.contains("valid")) {
            element.classList.remove("valid");
        }
        if (element.classList.contains("invalid")) {
            element.classList.remove("invalid");
        }
    });
};

function cleaner() {
    cleanUpForm();
    cleanAllCssValidateClasses();
}

render();
