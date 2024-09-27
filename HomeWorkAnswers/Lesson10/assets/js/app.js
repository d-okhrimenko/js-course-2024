import { books } from "./db.js";
import { View } from "./view.js";
import { Model } from "./model.js";
import { Dialog } from "./dialog.js";

const model = new Model(books);
const dialog = new Dialog(document.querySelector(".dialog"));
const view = new View(dialog);
const source = document.getElementById("bookTemplate").innerHTML;
const booksContainer = document.getElementById("bookList");
const template = Handlebars.compile(source);

render();

booksContainer.addEventListener("click", (e) => {
  if (!e.target.closest("[data-action]")) return;

  const book = e.target.closest(".books__item");
  const action = e.target.closest("[data-action]").dataset.action;

  if (action === "add") {
    view.showDialog(null);
  }

  if (action === "edit") {
    view.showDialog(model.find(book.dataset.id));
  }

  if (action === "delete") {
    model.remove(book.dataset.id);
    render();
  }
})

view.dialog.el.addEventListener("close", (e) => {
  const book = JSON.parse(dialog.el.returnValue);
  if (book.id) {
    model.update(book);
    render();

    return;
  }

  if (model.isDuplicate(book)) {
    alert('Ви намагаєтесь додати вже існуючу книжку');

    return;
  }

  model.add(book);
  render();
});

function render() {
  view.render(model.bookList, booksContainer, template);
}