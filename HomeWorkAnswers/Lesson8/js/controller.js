// let book = {"title": "Скотный двор", "author": "Джордж Оруэлл", "year": 1949, "genre": "Притча"};
let book = new Book("Скотный двор", "Джордж Оруэлл", 1945, "Притча");
booksDb.add(book);
booksDb.remove("Старий і море");
let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
// bookList.render(booksDb.books, html);
bookList.renderWithTemplate(booksDb.books, html, template);