

const bookCard = {
    render(books, element) {

        books.forEach(book => {
            let card = document.createElement('div');
            card.classList.add('book_card');
            card.insertAdjacentHTML('afterbegin', `
                <h2>Title: ${book.title}</h2>
                <h4>Author: ${book.author}</h4>
                <h4>Year: ${book.year}</h4>
                <h4>Genre:${book.genre}</h4>
                `)
                element.append(card)
        })
    },
    renderWithTemplate(books, element, template) {
        let html = '';
        books.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    }
}

