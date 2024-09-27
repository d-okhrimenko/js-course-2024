const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

function displayBooks() {
    const bookListContainer = document.querySelector("#bookList");
    bookListContainer.innerHTML = ""; // Очищаем контейнер перед добавлением книг

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Автор:</strong> ${book.author}</p>
            <p><strong>Рік видання:</strong> ${book.year}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
        `;

        bookListContainer.appendChild(bookDiv);
    });
}

// Вызов функции для отображения книг на странице
function init()
{
    displayBooks();
}

init();
