let html = document.querySelector("#contact-list");
let template = document.querySelector("#template").innerHTML;
//contactList.render(contactBook.contacts, html);
contactList.renderWithTemplate(contactBook.contacts, html, template);