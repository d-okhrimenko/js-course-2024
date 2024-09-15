class addBookView {
  _parentEl = document.querySelector(".add-book");
  _btnAdd = document.querySelector(".btn-add");
  _overlay = document.querySelector(".overlay");
  _window = document.querySelector(".add-book-window");
  _btnClose = document.querySelector(".btn-close-modal");

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

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

  addHandlerUpload(handler1, handler2) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      const dataArray = [...new FormData(e.target)];
      console.log(dataArray);
      const newBook = Object.fromEntries(dataArray);
      newBook.id = Number(newBook.id);
      // console.log(newBook);
      // console.log(newBook.id);
      const id = newBook.id;
      if (!id) handler1(newBook);
      handler2(id, newBook);
      this._parentEl.querySelectorAll("input").forEach((field) => (field.value = ""));
      this.toggleWindow();
    });
  }

  addHandlerValidateTile(handler) {
    this._parentEl.title.addEventListener("input", function () {
      const currTitle = this.value;
      handler(currTitle);
    });
  }
}

export default new addBookView();
