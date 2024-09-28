import allBooksView from "./allBooksView";

class addBookView {
  _parentEl = document.querySelector(".add-book");
  _btnAdd = document.querySelector(".btn-add");
  _overlay = document.querySelector(".overlay");
  _window = document.querySelector(".add-book-window");
  _btnClose = document.querySelector(".btn-close-modal");

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

  addHandlerUpload(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      const dataArray = [...new FormData(e.target)];
      console.log(dataArray);
      const newBook = Object.fromEntries(dataArray);
      console.log(newBook);
      handler(newBook);
      this.toggleWindow();
      this._parentEl.querySelectorAll("input").forEach((field) => (field.value = ""));
    });
  }
}

export default new addBookView();
