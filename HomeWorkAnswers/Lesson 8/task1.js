// 1.	Створити масив об’єктів, де кожен об’єкт представляє книгу:
const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

// 3.	Написати функцію для динамічного виведення книг:
function displayBooks(bookArray) {
    const bookList = document.querySelector('#bookList');
    bookList.innerHTML = '';

    // Перебираємо масив 
    bookArray.forEach(book => {
        // <div> для кожної книги
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        // <p> для назви книги, автора, рік видання та жанр
        const title = document.createElement('p');
        title.textContent = `Назва: ${book.title}`;

        const author = document.createElement('p');
        author.textContent = `Автор: ${book.author}`;

        const year = document.createElement('p');
        year.textContent = `Рік видання: ${book.year}`;

        const genre = document.createElement('p');
        genre.textContent = `Жанр: ${book.genre}`;

        // Додаємо елементи до <div>
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(year);
        bookDiv.appendChild(genre);

        // + <div> до контейнера
        bookList.appendChild(bookDiv);
    });
}

// 4.	Додати функціонал для відображення списку книг на сторінці:
displayBooks(books);
