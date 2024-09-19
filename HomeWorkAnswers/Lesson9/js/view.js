const booksСatalogue = {
    render(books, wrapper) {
        wrapper.innerHTML = "";
        books.forEach(book => {
            // секція книги
            let section = document.createElement("section");

            // контейнер книги
            let divContainerBook = document.createElement("div");
            divContainerBook.classList.add("container-book");

            // ідентифікатор книги
            let bookId = book.id;
            
            // обкладинка 
            let divCoverBook = document.createElement("div");
            divCoverBook.classList.add("left-column-container-book");

            let imgCoverBook = document.createElement("img");
            imgCoverBook.classList.add("book-cover");
            imgCoverBook.setAttribute("src", book.cover); // imgCoverBook.src = book.cover;
            imgCoverBook.setAttribute("alt", `${book.title}, ${book.author}`);
            imgCoverBook.setAttribute("title", book.title);
            divCoverBook.appendChild(imgCoverBook);

            divContainerBook.appendChild(divCoverBook);

            // характеристики книги
            let divProBook = document.createElement("div");
            divProBook.classList.add("center-column-container-book");

            // назва
            let divBookTitle = document.createElement("div");
            divBookTitle.classList.add("row");

            let bookTitle = document.createElement("h2");
            bookTitle.textContent = book.title;
            bookTitle.classList.add("book-title");
            divBookTitle.appendChild(bookTitle);

            divProBook.appendChild(divBookTitle);

            // автор
            let divBookAuthor = document.createElement("div");
            divBookAuthor.classList.add("row");

            let bookAuthor = document.createElement("h3");
            bookAuthor.textContent = `Автор: ${book.author}`;
            bookAuthor.classList.add("book-author");
            divBookAuthor.appendChild(bookAuthor);

            divProBook.appendChild(divBookAuthor);

            // рік видання
            let divBookYear = document.createElement("div");
            divBookYear.classList.add("row");

            let bookYear = document.createElement("p");
            bookYear.textContent = `Рік : ${book.year}`;
            bookYear.classList.add("book-year");
            divBookYear.appendChild(bookYear);

            divProBook.appendChild(divBookYear);

            // жанр
            let divBookGenre = document.createElement("div");
            divBookGenre.classList.add("row");

            let bookGenre = document.createElement("p");
            bookGenre.textContent = `Жанр: ${book.genre}`;
            bookGenre.classList.add("book-year");
            divBookGenre.appendChild(bookGenre);

            divProBook.appendChild(divBookGenre);

            // кнопки
            let divButtons = document.createElement("div");
            divButtons.classList.add("right-column-container-book");

            // редагування
            const buttonEdit = document.createElement("button");
            buttonEdit.textContent = "Редагувати";
            buttonEdit.classList.add("btn-edit");

            buttonEdit.addEventListener("click", () => {
                editBook(bookId);
            });

            divButtons.appendChild(buttonEdit);

            // видалення
            const buttonRemove = document.createElement("button");
            buttonRemove.textContent = "Видалити";
            buttonRemove.classList.add("btn-remove");

            buttonRemove.addEventListener("click", () => {
                removeBook(bookId);
            });

            divButtons.appendChild(buttonRemove);

            // формування DOM
            divContainerBook.appendChild(divProBook);
            divContainerBook.appendChild(divButtons);
            section.appendChild(divContainerBook);

            section.classList.add("book");
            wrapper.appendChild(section);
        });
    },
}
