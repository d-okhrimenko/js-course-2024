let listOfBooks = {

    displayBooks(bookList, element) {
        bookList.forEach(book => {
            let div = document.createElement("div");
            div.classList.add("book");
            div.insertAdjacentHTML("beforeend", `<h2>Title: ${book.title}</h2>`);
            div.insertAdjacentHTML("beforeend", `<p>Author: ${book.author}</p>`);
            div.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
            div.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
            div.insertAdjacentHTML("beforeend", "</br>");
            element.appendChild(div);
        });
    }
}