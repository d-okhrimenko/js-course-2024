let listOfBooks = {

    displayBooks(bookList, element) {
        element.innerHTML = '';
        bookList.forEach(book => {
            let div = document.createElement("div");
            div.classList.add("book");
            div.insertAdjacentHTML("beforeend", `<h2>Title: ${book.title}</h2>`);
            div.insertAdjacentHTML("beforeend", `<p>Author: ${book.author}</p>`);
            div.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
            div.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
            div.insertAdjacentHTML("beforeend", `<button type='submit' onclick='deleteBook(${book.id})'>Delete Book</button>`);
            div.insertAdjacentHTML("beforeend", `<button type='submit' onclick='editBook(${book.id})'>Edit Book</button>`);
            div.insertAdjacentHTML("beforeend", "</br>");
            element.appendChild(div);
        });
    }
}