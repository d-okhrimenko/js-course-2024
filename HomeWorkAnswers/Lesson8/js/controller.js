let html = document.querySelector("#viewBooks");
let template = document.querySelector("#template").innerHTML;
//contactList.render(contactBook.contacts, html);
renderBooks.renderWithTemplate(dataBooks, html, template);