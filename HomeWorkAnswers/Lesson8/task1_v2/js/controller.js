let div = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;

listBooks._display(myBooks.books, div, template);
listBooks._add(...myBooks.books);
