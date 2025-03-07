
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