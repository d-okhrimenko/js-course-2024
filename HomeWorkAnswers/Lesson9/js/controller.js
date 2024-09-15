// let book = new Book("Скотный двор", "Джордж Оруэлл", 1945, "Притча");
// booksDb.add(book);
// booksDb.remove("Старий і море");
const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");


// bookList.render(booksDb.books, html);
bookList.renderWithTemplate(booksDb.books, html, template);