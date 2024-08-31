const booksСatalogue = {
    render(books, wrapper) {
        books.forEach(book => {
            let section = document.createElement("section");
            section.innerHTML = `
                <div class="container-book">
                    <div class="left-column-container-book">
                        <img src="${book.cover}" alt="${book.title}, ${book.author}" title="${book.title}">
                    </div>
                    <div class="right-column-container-book">
                        <div class="row">
                            <h2>${book.title}</h2>
                        </div>
                        <div class="row">
                            <h3>Автор: ${book.author}</h3>    
                        </div>
                        <div class="row">
                            <p>Рік: ${book.year}</p>
                        </div>
                        <div class="row">
                            <p>Жанр: ${book.genre}</p>
                        </div>
                    </div>
                </div>
            `;
            section.classList.add("book");
            wrapper.appendChild(section);
        });
    },
};
