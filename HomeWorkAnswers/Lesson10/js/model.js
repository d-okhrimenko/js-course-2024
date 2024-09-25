const booksList = {
    books: [{
            id: 1,
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949,
            genre: "Антиутопія",
            cover: "https://static.yakaboo.ua/media/catalog/product/1/0/1097_1_2.jpg"
        },
        {
            id: 2,
            title: "Гобіт",
            author: "Джон Р. Р. Толкін",
            year: 1937,
            genre: "Фентезі",
            cover: "https://static.yakaboo.ua/media/catalog/product/2/1/21_3_43.jpg"
        },
        {
            id: 3,
            title: "І не лишилось жодного",
            author: "Аґата Крісті",
            year: 1939,
            genre: "Детективний роман",
            cover: "https://static.yakaboo.ua/media/catalog/product/a/4/a458cb63b2fcd51bbdc90f2d182c7284.jpg"
        },
        {
            id: 4,
            title: "Код да Вінчі",
            author: "Ден Браун",
            year: 2003,
            genre: "Містичний роман",
            cover: "https://static.yakaboo.ua/media/catalog/product/i/m/img407_4_7.jpg"
        },
        {
            id: 5,
            title: "Гаррі Поттер і філософський камінь",
            author: "Дж. К. Роулінг",
            year: 1997,
            genre: "Фентезі",
            cover: "https://bookclub.ua/images/db/goods/45452_69126.jpg"
        },
    ],
    lastId: 5,
    modeEdit: false,
    add(book) {
        this.lastId++;
        book.id = this.lastId;
        this.books.push(book);
    },
    remove(id) {
        let index = this.searchIndex(id);
        this.books.splice(index, 1);
    },
    update(id, book) {
        let index = this.searchIndex(id);
        this.books[index] = book;
    },
    find(id) {
        let index = this.searchIndex(id);
        return this.books[index];
    },
    searchIndex(id) {
        return this.books.findIndex(item => item.id === id);
    },
    findBookByName(bookTitle){
        return this.books.some((book, index) => book.title == bookTitle && book.id !== index);
    }
}
