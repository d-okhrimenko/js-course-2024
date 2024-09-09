import * as model from "./model.js";
import allBooksView from "./views/allBooksView.js";
import addBookView from "./views/addBookView.js";

const controlBooks = function () {
  const allBooks = model.getAllBooks();
  allBooksView.renderAllBooks(allBooks, allBooksView._parentEl);

  // allBooksView.renderAllBooks(allBooks, allBooksView._parentEl, allBooksView._template);
};

const deleteBook = function (book) {
  model.removeBook(book);
  allBooksView.clearAllBooks();
  controlBooks();
};

const controlAddBook = function (book) {
  model.addBook(book);
  allBooksView.clearAllBooks();
  controlBooks();
};

function init() {
  controlBooks();
  allBooksView.addHandlerRemoveBook(deleteBook);
  addBookView.addHandlerUpload(controlAddBook);
}
init();
