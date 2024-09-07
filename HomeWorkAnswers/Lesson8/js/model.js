class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.inn = genre;
    }
}

const booksDb = {
    books: [
        { "title": "1984", "author": "Джордж Орвелл", "year": 1949, "genre": "Антиутопія" },
        { "title": "Гаррі Поттер і філософський камінь", "author": "Дж. К. Роулінг", "year": 1997, "genre": "Фентезі" },
        { "title": "Гра престолів", "author": "Джордж Р. Р. Мартін", "year": 1996, "genre": "Фентезі" },
        { "title": "Старий і море", "author": "Ернест Хемінгуей", "year": 1952, "genre": "Пригодницький роман" },
        { "title": "Майстер і Маргарита", "author": "Михайло Булгаков", "year": 1967, "genre": "Фантастика" }
],
add(book) {
    this.books.push(book);
},
remove(title) {
    let obj = this.find(title);
    let index = this.books.indexOf(obj);
    this.books.splice(index,1);
},
find(searchStr) {
    let obj = this.books.filter(x => x.title === searchStr)[0];
    return obj;
},
update(id, book) {}
}
