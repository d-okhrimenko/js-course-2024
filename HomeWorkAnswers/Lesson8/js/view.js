const bookList = {
    render(books, element) {
        books.forEach(book => {
            let div = document.createElement("div");
            div.setAttribute("id", "book");
            div.insertAdjacentHTML("beforeend", `<h2>Title: ${book.title}</h2>`);
            div.insertAdjacentHTML("beforeend", `<h3>Author: ${book.author}</h3>`);
            div.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
            div.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
            element.appendChild(div);
        });
    }
}
