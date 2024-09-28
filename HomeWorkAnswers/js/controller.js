let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
//contactList.render(contactBook.contacts, html);
bookList.renderWithTemplate(library.books, html, template);