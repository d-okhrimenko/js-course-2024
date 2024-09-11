
// Завантаження книг з локального сховища або використання дефолтного масиву
const storedBooks = JSON.parse(localStorage.getItem("books"));
const books = storedBooks ? storedBooks : [
    { title: "Війна і мир", author: "Лев Толстой", year: 1869, genre: "Роман" },
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    { title: "До зустрічі з тобою", author: "Джоджо Мойєс", year: 2012, genre: "Роман" }
];

function displayBooks(books) {
    const bookList = document.querySelector("#bookList");
    bookList.innerHTML = ""; // Очищуємо список перед повторним додаванням

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Автор:</strong> ${book.author}</p>
            <p><strong>Рік видання:</strong> ${book.year}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
        `;
        bookList.appendChild(bookItem);
    });
}

document.querySelector("#bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const year = document.querySelector("#year").value;
    const genre = document.querySelector("#genre").value;

    const newBook = { title, author, year, genre };
    books.push(newBook);

    // Збереження оновленого списку книг у локальне сховище
    localStorage.setItem("books", JSON.stringify(books));

    displayBooks(books);

    // Очищуємо форму після додавання книги
    document.querySelector("#bookForm").reset();
});

// Відображення книг при завантаженні сторінки
displayBooks(books);