const bookList = {
    render(list, element) {


        list.forEach(book => {
            let div = document.createElement("div")
    
            const bookTitle = document.createElement('h2');
            bookTitle.textContent = book.title;
    
            const bookAuthor = document.createElement('h3');
            bookAuthor.textContent = `Автор: ${book.author}`;
    
            const bookYear = document.createElement('p');
            bookYear.textContent = `Рік : ${book.year}`;
    
            const bookGenre = document.createElement('p');
            bookGenre.textContent = `Жанр: ${book.genre}`;

            div.appendChild(bookTitle);
            div.appendChild(bookAuthor);
            div.appendChild(bookYear);
            div.appendChild(bookGenre)
            
            div.classList.add("book")
            element.appendChild(div);

            
        });

    }
}