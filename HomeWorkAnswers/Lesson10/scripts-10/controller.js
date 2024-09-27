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

// const controlValidateYear = function (year) {
//   if (model.isValidYear(year))
//     addBookView._parentEl.year.setCustomValidity("⛔ Year should in the range 1450 - current year❗");
// };

const controlValidateYearIsNumber = function (year, errorField) {
  errorField.classList.add("none");
  if (model.isNumber(year)) {
    errorField.classList.remove("none");
  }
  console.log(model.isNumber(year));
};

const controlValidateYearRange = function (year, errorField) {
  errorField.classList.add("none");

  if (!model.isValidYear(year)) {
    errorField.classList.remove("none");
  }
  console.log(model.isValidYear(year));
};

function init() {
  controlBooks();
  allBooksView.addHandlerRemoveBook(deleteBook);
  addBookView.addHandlerUpload(controlAddBook, controlUpdateBook);
  allBooksView.addHandlerUpdateBook(controlUpdateBook);
  addBookView.addHandlerValidateTile(controlValidateTile);
  addBookView.addHandlerValidateYearNumber(controlValidateYearIsNumber);
  addBookView.addHandlerValidateYearRange(controlValidateYearRange);
}
init();
