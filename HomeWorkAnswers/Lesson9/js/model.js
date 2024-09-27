// class Book {
//     constructor(id, title, author, year, genre) {
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.inn = genre;
//     }
// }

const booksDb = {
    books: [
        { "id": 1,"title": "1984", "author": "Джордж Орвелл", "year": 1949, "genre": "Антиутопія" },
        { "id": 2,"title": "Гаррі Поттер і філософський камінь", "author": "Дж. К. Роулінг", "year": 1997, "genre": "Фентезі" },
        { "id": 3,"title": "Гра престолів", "author": "Джордж Р. Р. Мартін", "year": 1996, "genre": "Фентезі" },
        { "id": 4,"title": "Старий і море", "author": "Ернест Хемінгуей", "year": 1952, "genre": "Пригодницький роман" },
        { "id": 5,"title": "Майстер і Маргарита", "author": "Михайло Булгаков", "year": 1967, "genre": "Фантастика" },
        { "id": 6,"title": "Скотный двор", "author": "Джордж Оруэлл", "year": 1945, "genre": "Притча" },
    ],

    // nextId: 7,
    nextId() {
        let res = this.books[0].id;
        for (const value of this.books)
            if (value.id > res)
                res = value.id;
        return res + 1;
    },
    add(book) {
        book.id = this.nextId();  // this.nextId++;
        this.books.push(book);
    },
    remove(id) {
        let obj = this.find(id);
        let index = this.books.indexOf(obj);
        this.books.splice(index,1);
    },
    update(id, book) {
        let obj = this.find(id);
        let index = this.books.indexOf(obj);
        this.books[index] = book;
    },
    find(id) {
        let index = this.books.findIndex(x => x.id == id);
        return this.books[index];
        // let obj = this.books.filter(x => x.id === id)[0];
        // return obj;
    }
}
