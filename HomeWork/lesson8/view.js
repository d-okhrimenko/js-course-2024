function displayBook() {
    const bookList = document.querySelector("#bookList");

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        bookItem.innerHTML = `
        <h2 class = "title"> ${book.title}</h2>
        <p class = "author"> Автор: ${book.author}</p>
        <p class = "year"> Рік: ${book.year} </p>
        <p class = "genre"> Жанр: ${book.genre}</p> 
        `;

        bookList.appendChild(bookItem);
    });
}

displayBook();