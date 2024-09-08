const booksJson = `[
    {
        "id": 1,
        "title": "1984",
        "author": "Джордж Орвелл",
        "year": 1949,
        "genre": "Антиутопія"
    },
    {
        "id": 2,
        "title": "Гаррі Поттер і філософський камінь",
        "author": "Дж. К. Роулінг",
        "year": 1997,
        "genre": "Фентезі"
    },
    {
        "id": 3,
        "title": "Гра престолів",
        "author": "Джордж Р. Р. Мартін",
        "year": 1996,
        "genre": "Фентезі"
    },
    {
        "id": 4,
        "title": "Старий і море",
        "author": "Ернест Хемінгуей",
        "year": 1952,
        "genre": "Пригодницький роман"
    },
    {
        "id": 5,
        "title": "Майстер і Маргарита",
        "author": "Михайло Булгаков",
        "year": 1967,
        "genre": "Фантастика"
    }
]`;

const bookCatalog = {

    books: [],

    loadDataFromJson() {
        this.books = JSON.parse(booksJson);
    },

    // get nextId
    nextId() {
        let number = Math.max(...this.books.map(item => item.id));
        number = isNaN(number) || Math.abs(number) === Infinity ? 0 : number + 1;

        return number;
    },

    // help-func
    findIndex(id) {
        return this.books.findIndex(x => x.id == id);
    },

    add(book) {
        book.id = this.nextId();
        this.books.push(book);
    },

    remove(id) {
        let index = this.findIndex(id);
        this.books.splice(index, 1);
    },

    update(id, book) {
        let index = this.findIndex(id);
        this.books[index] = book;
        this.books[index].id = id;
    },

    find(id) {
        let index = this.findIndex(id);
        return this.books[index];
    }

}