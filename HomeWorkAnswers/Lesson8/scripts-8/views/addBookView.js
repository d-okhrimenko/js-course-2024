import allBooksView from "./allBooksView";

class addBookView {
  _btnAdd = document.querySelector(".btn-add");
  _overlay = document.querySelector(".overlay");
  _window = document.querySelector(".add-book-window");
  _btnClose = document.querySelector("btn--close-modal");

  constructor() {}

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnAdd.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }
}

export default new addBookView();
