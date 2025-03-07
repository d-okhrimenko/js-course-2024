
const htmlBookList = document.querySelector("#bookList");

const templet = document.querySelector("#template");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const boorForm = document.querySelector("#bookForm");

let editId = null;

function render(){
    bookList.renderBookList(bookLibrary,templet,htmlBookList);
}

boorForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("submit");
    
    const book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    if(editId !== null){
        bookLibrary.editBook(editId, book);
    } else {
        bookLibrary.addBook(book);
        
    }
    
    editId = null;
    //bookLibrary.addBook(book);
    render();

});
boorForm.genreInput.addEventListener("input", function(e){
    console.log("change");
    console.log(e);
    if (boorForm.genreInput.value.charAt(0) === boorForm.genreInput.value.charAt(0).toUpperCase()){
        boorForm.genreInput.setCustomValidity("");
    }
    else{
        boorForm.genreInput.setCustomValidity("Please enter a valid genre");   
    }
});
    
boorForm.authorInput.addEventListener("change", function () {
    validateElement(boorForm.authorInput, "#authorError");
});

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);

    element.classList.remove("valid");
    element.classList.remove("invalid");
    errorElement.style.display = "none";

    if (element.value.length > 0) {
        element.classList.add("valid");
    }
    else {
        element.classList.add("invalid");
        errorElement.style.display = "inline";
    }
}

function remove(id) {
    bookLibrary.deleteBook(id);
    editId = null;
    render();
}

function edit(id) {
    const book = bookLibrary.getById(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    
    render();
}

render();