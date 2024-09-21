const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;

function render() {
    contactList.renderWithTemplate(listBook.books, html, template);
}
render();