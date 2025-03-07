
const bookList = {
    render(books) {
        const htmlBookList = document.querySelector("#bookList");
        books.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p>author: ${book.author}</p>
                <p>year: ${book.year}</p>
                <p>genre: ${book.genre}</p>
            `;
            htmlBookList.appendChild(bookDiv);
        });
    },
    
    renderNewBook(books,temple) {
        let = html = "";
        const htmlBookList = document.querySelector("#bookList");
        books.forEach(book => {
            html += Mustache.render(temple.innerHTML, book);
        });
        
        htmlBookList.innerHTML = html;
    }
}
