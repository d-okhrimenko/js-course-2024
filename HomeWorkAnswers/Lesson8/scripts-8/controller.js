import { state, getAllBooks, removeBook, addBook } from "./model.js";
import allBooksView from "./views/allBooksView.js";
import addBookView from "./views/addBookView.js";

const controlBooks = function () {
  const allBooks = getAllBooks();
  allBooksView.renderAllBooks(allBooks, allBooksView._parentEl, allBooksView._template);
};

const deleteBook = function (book) {
  removeBook(book);
  allBooksView.clearAllBooks();
  controlBooks();
};

function init() {
  controlBooks();
  allBooksView.addHandlerRemoveBook(deleteBook);
  // addBookView._addHandlerShowWindow();
  // addBookView._addHandlerHideWindow();
}
init();
console.log(addBookView._btnClose);
