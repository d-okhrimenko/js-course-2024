import * as model from "./model.js";
import allBooksView from "./views/allBooksView.js";
import addBookView from "./views/addBookView.js";

const controlBooks = function () {
  const allBooks = model.getAllBooks();
  allBooksView.renderAllBooks(allBooks, allBooksView._parentEl);
};

const deleteBook = function (id) {
  model.removeBook(id);
  // console.log(model.state.books);
  allBooksView.clearAllBooks();
  controlBooks();
};

const controlAddBook = function (book) {
  model.addBook(book);
  // console.log(model.state.books);
  allBooksView.clearAllBooks();
  controlBooks();
};

const controlUpdateBook = function (id, newBook) {
  model.updateBook(id, newBook);
  // console.log(model.state.books);
  allBooksView.clearAllBooks();
  controlBooks();
  // console.log(`Updating book with id: ${id}`, newBook);
};

const controlValidateTile = function (title) {
  if (model.isPresentTitle(title))
    addBookView._parentEl.title.setCustomValidity("Book with the same title already exist");
};

function init() {
  controlBooks();
  allBooksView.addHandlerRemoveBook(deleteBook);
  addBookView.addHandlerUpload(controlAddBook, controlUpdateBook);
  allBooksView.addHandlerUpdateBook(controlUpdateBook);
  addBookView.addHandlerValidateTile(controlValidateTile);
}
init();
