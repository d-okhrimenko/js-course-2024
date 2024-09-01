import { books } from "./db.js";
import { View } from "./view.js";

const view = new View();
const source = document.getElementById("bookTemplate").innerHTML;
const booksContainer = document.getElementById("bookList");
const template = Handlebars.compile(source);

view.render(books, booksContainer, template);