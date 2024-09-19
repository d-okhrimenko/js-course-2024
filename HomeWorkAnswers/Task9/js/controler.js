let html = document.querySelector('#booksList');
listOfBooks.displayBooks(Library.books, html);

//Lesson 9
let bookForm = document.querySelector('#bookDetails');
let bookName = document.querySelector('#BookName')
let bookAuthor = document.querySelector('#Author')
let bookYear = document.querySelector('#Year')
let bookGanre = document.querySelector('#Genre')

let editId = null;

bookForm.addEventListener("submit", function (event){
    event.preventDefault();
    if(editId == null){
        addBook();
    }
    else{
        Library.editBookById(editId, bookName, bookAuthor, bookYear, bookGanre);
        listOfBooks.displayBooks(Library.books, html);
        editId = null;
    }

    bookName.value = "";
    bookAuthor.value = "";
    bookYear.value = "";
    bookGanre.value = "";
});

function addBook(){
    Library.addNewBook(bookName, bookAuthor, bookYear, bookGanre);
    listOfBooks.displayBooks(Library.books, html);
}

function deleteBook(bookId){
    Library.deleteBookById(bookId);
    listOfBooks.displayBooks(Library.books, html);
}

function editBook(bookId){
    let editedBook = Library.findBookById(bookId);
    editId = editedBook.id;
    bookName.value = editedBook.title;
    bookAuthor.value = editedBook.author;
    bookYear.value = editedBook.year;
    bookGanre.value = editedBook.genre;
}