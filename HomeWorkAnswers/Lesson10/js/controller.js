const element = document.querySelector("#bookList");
const bookForm = document.querySelector("#bookForm");
function render() {
    bookList.render(books, element);
}

// inputs
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookYear = document.querySelector("#bookYear");
const bookGenre = document.querySelector("#bookGenre");

bookYear.min= 1450
bookYear.max= new Date().getFullYear()

let editId = null

const addAndRenameButton = document.querySelector("#add-and-rename-button");
const nameRenameBook = document.querySelector("#name-rename-book")
const totalBooks = document.querySelector("#total-books")
totalBooks.textContent = `Всього книг: ${books.length}`

bookForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        year: bookYear.value,
        genre: bookGenre.value,
    }
    if (editId == null) {
        add(book)
        totalBooks.textContent = `Всього книг: ${books.length}`
    }
    else {
        update(editId, book)
        addAndRenameButton.textContent = "Додати книгу"
        nameRenameBook.textContent = ""
        editId = null


    }
    bookTitle.value = ""
    bookAuthor.value = ""
    bookYear.value = ""
    bookGenre.value = ""

    render()
});
bookTitle.addEventListener("input", function(){
    if(checkTitle(books,bookTitle.value,editId)){
        bookTitle.setCustomValidity("")
    }
    else{
        bookTitle.setCustomValidity("Така книга є.")
    }


})

function deleteBook(id) {
    remove(id)
    render()
    totalBooks.textContent = `Всього книг: ${books.length}`

}
function editBook(id) {
    
    const book = find(id)
    editId = book.id
    addAndRenameButton.textContent = "Зберегти"
    nameRenameBook.textContent = `ви змінюєте "${book.title}"`
    bookTitle.value = book.title
    bookAuthor.value = book.author
    bookYear.value = book.year
    bookGenre.value = book.genre
    
    if(checkTitle(books,bookTitle.value,editId)){
        bookTitle.setCustomValidity("")
    }
    else{
        bookTitle.setCustomValidity("Така книга є.")
    }


}
function checkTitle(books,title, editId = null){
    let mistake = false
    books.forEach(elem => {
        
        if (elem.title === title & elem.id != editId){
            mistake = true
            return;
        }
        
        
    });
    return !mistake
}

render()