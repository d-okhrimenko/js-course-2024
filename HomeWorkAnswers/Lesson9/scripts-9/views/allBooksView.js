import Mustache from "mustache";
import addBookView from "./addBookView";
class AllBooksView {
  _parentEl = document.querySelector(".all-books");
  // _template = document.getElementById("template").innerHTML;

  // renderAllBooks(books, _parentEl, _template) {
  //   let html = "";
  //   books.forEach((book) => {
  //     html += Mustache.render(_template, book);
  //   });
  //   this._parentEl.insertAdjacentHTML("beforeend", html);
  // }

  // another way to work with template in Mustache:
  renderAllBooks(books, _parentEl) {
    const template = `
  <section class="book">
    <div class="book-details">            
      <details>
        <summary title ="click to open book details" class="title">{{title}}</summary>
        <p>Author: <span class="author" n>{{author}}</span></p>
        <p>Year: <span class="year">{{year}}</span></p>
        <p>Genre: <span class="genre">{{genre}}</span></p>
        <p>Id: <span class="id">{{id}}</span></p>
      </details>
    </div>

    <div class ="controls">           
      <button class ="btn btn-edit" title ="click to edit book">📝</button>
      <button class="btn btn-remove" title ="click to remove book">❌</button>
    </div>
   </section>
    `;
    const html = books.map((book) => Mustache.render(template, book));
    _parentEl.insertAdjacentHTML("beforeend", html);
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
      const id = Number(bookEl.querySelector(".id").textContent);
      console.log(id);
      const isSure = confirm("Are you sure you want to remove this book?");
      if (!isSure) return;
      handler(id);
    });
  }

  addHandlerUpdateBook(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btnEdit = e.target.closest(".btn-edit");
      if (!btnEdit) return;
      console.log(btnEdit);
      const bookEl = btnEdit.closest(".book");
      const title = bookEl.querySelector(".title").textContent;
      const author = bookEl.querySelector(".author").textContent;
      const year = bookEl.querySelector(".year").textContent;
      const genre = bookEl.querySelector(".genre").textContent;
      const id = Number(bookEl.querySelector(".id").textContent);

      const bookObj = { title, author, year, genre, id };
      console.log(bookObj);
      addBookView.toggleWindow();
      addBookView._parentEl.title.value = bookObj.title;
      addBookView._parentEl.author.value = bookObj.author;
      addBookView._parentEl.year.value = bookObj.year;
      addBookView._parentEl.genre.value = bookObj.genre;
      addBookView._parentEl.id.value = bookObj.id;
      const newBook = {
        title: addBookView._parentEl.title.value,
        author: addBookView._parentEl.author.value,
        year: addBookView._parentEl.year.value,
        genre: addBookView._parentEl.genre.value,
        id: Number(addBookView._parentEl.id.value),
      };
      handler(newBook.id, newBook);
    });
  }
}

export default new AllBooksView();
