const books = [
  { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
  { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
  { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
  { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
  { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

const bookList = document.getElementById('bookList');
const bookForm = document.getElementById('bookForm');

function createBookElement(book) {
    // Створюємо елемент для однієї книги на основі шаблону
    const template = document.getElementById('bookTemplate');
    const clone = template.content.cloneNode(true);

    // Заповнюємо елемент даними книги
    clone.querySelector('.title').textContent = book.title;
    clone.querySelector('.author').textContent = book.author;
    clone.querySelector('.year').textContent = book.year;
    clone.querySelector('.genre').textContent = book.genre;

    // Додаємо обробники подій для кнопок "Редагувати" та "Видалити"
    const editButton = clone.querySelector('.edit');
    editButton.addEventListener('click', () => {
        editBook(books.indexOf(book));
    });

    const deleteButton = clone.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        if (confirm('Ви дійсно бажаєте видалити цю книгу?')) {
            books.splice(books.indexOf(book), 1);
            displayBooks();
        }
    });

    return clone;
}

function displayBooks() {
    // Очищаємо список книг перед відображенням
    bookList.innerHTML = '';

    // Додаємо кожну книгу в список
    books.forEach(book => {
        bookList.appendChild(createBookElement(book));
    });
}

function addBook() {
    // Отримуємо дані з форми
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;   

    const genre = document.getElementById('genre').value;   


    // Додаємо нову книгу в масив
    books.push({ title, author, year, genre });
    displayBooks();
    closeForm();
}

function editBook(index) {
    // Отримуємо книгу для редагування
    const book = books[index];

    // Заповнюємо форму даними книги
    document.getElementById('title').value = book.title;
    // ... аналогічно для інших полів

    // Показати форму
    bookForm.style.display = 'block';

    // Додаємо обробник події для збереження змін
    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Оновити дані книги в масиві
        books[index] = {
            title: document.getElementById('title').value,
            // ... аналогічно для інших полів
        };
        displayBooks();
        closeForm();
    });
}

function closeForm() {
    bookForm.reset();
    bookForm.style.display = 'none';
}

// Викликаємо функцію для першого відображення книг
displayBooks();