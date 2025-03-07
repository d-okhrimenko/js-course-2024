
const bookList = {
    
    renderBookList(bookLibrary,temple,htmlBookList) {
        let = html = "";
        bookLibrary.books.forEach(book => {
            html += Mustache.render(temple.innerHTML, book);
        });
        
        htmlBookList.innerHTML = html;
    }   
}
