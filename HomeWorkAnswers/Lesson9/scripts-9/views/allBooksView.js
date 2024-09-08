import Mustache from "mustache";
// import bookView from "./bookView.js";

class AllBooksView {
  _parentEl = document.querySelector(".all-books");
  _template = document.getElementById("template").innerHTML;

  renderAllBooks(books, _parentEl, _template) {
    let html = "";
    books.forEach((book) => {
      html += Mustache.render(_template, book);
    });
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  clearAllBooks() {
    this._parentEl.innerHTML = "";
  }

  addHandlerRemoveBook(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btnRemove = e.target.closest(".btn-remove");
      if (!btnRemove) return;
      console.log(btnRemove);
      const bookEl = btnRemove.closest(".book");
      const title = bookEl.querySelector(".title").textContent;
      const author = bookEl.querySelector(".author").textContent;
      const year = bookEl.querySelector(".year").textContent;
      const genre = bookEl.querySelector(".genre").textContent;
      const bookObj = { title, author, year, genre };
      console.log(bookObj);
      handler(bookObj);
    });
  }
}

export default new AllBooksView();
